<?php
namespace app\index\controller;
use think\Controller;
use think\Input;
use think\Request;
use think\Session;
use think\Loader;
use PHPExcel_IOFactory;
use PHPExcel;

class Staff extends Controller{
	/**
	 * [addStaff 管理员手动录入用户信息]
	 */
	public function addStaff(){

		//基本信息需要录入到User表
		$userData['username'] = input('request.staff_number');
		$userData['password'] = md5(input('request.password'));
		$userData['role']	  = input('request.staff_role');
		$accumulate = input('request.accumulate');
		$consume    = input('require.consume');
		if(!empty($accumulate)){
			$userData['accumulate'] = $accumulate;
		}
		if(!empty($consume)){
			$userData['consume']  = $consume;
		}
		$is_null = \app\index\model\User::searchOne($userData['username']);

		if(empty($is_null)){
	
			$is = \app\index\model\User::addStaffInfo($userData);
		}
    	//添加到数据源的信息表
    	$param = Request::instance()->param();
    	$param['add_time'] = date("Y-m-d H:i:s",time());
    	//查找本月数据是否存在条件
    	$where['staff_number'] = $param['staff_number'];
    	$cru_time = date("Y-m",time());
    	$where['add_time']     = array("like","$cru_time%");
    	$current = \app\index\model\StaffInfo::getOne($where);
    	if(!$current){

	    	$_is = \app\index\model\StaffInfo::addStaff($param);
	    	if($_is){
	    		$data['code'] = 1;
	    		$data['msg']  = '添加用户信息成功!';
	    	}else{
	    		$data['code'] = 0;
	    		$data['msg']  = '添加用户信息表失败';
	    	}
	    }else {
	    	$data['code'] = -1;
	    	$data['msg']  = '本月此员工数据已经存在';
	    }
		return json($data);
		
	}
	/**
	 * [import 导入数据上传]
	 * @return [type] [description]
	 */
	public function import(){
		$file = request()->file('image');
	    // 移动到框架应用根目录/public/uploads/ 目录下
	    $info = $file->validate(['ext'=>'xlsx'])->move(ROOT_PATH . 'public' . DS . 'uploads');
	    if($info){
	         $path = '.'.DS . 'uploads'.DS.$info->getSaveName();
	         //var_dump($path);
	         $data = $this->doImport($path);
	    }else{
	        // 上传失败获取错误信息
	        $data['code'] = 0;
	        $data['msg'] = $file->getError();
	        
	    }
	    return json($data);
	}
	/*员工数据信息导入*/
	public function doImport($path="./uploads/20161223/9bc4e4cdc0941244bbd629f58fa6471c.xlsx"){
		var_dump($path);

		$res = Loader::import('PHPExcel.PHPExcel.IOFactory',EXTEND_PATH);
		
        $objReader = PHPExcel_IOFactory::createReader('Excel2007');
        $objReader->setReadDataOnly(true);
        $AllSheets = $objReader->load($path);
        $AllSheet = $AllSheets->getAllSheets();
        foreach ($AllSheet as $sheet) {
            $info[$sheet->getTitle()] = $sheet->toArray();
        }

        $arr = $info['Sheet1']; 
       	unset($arr[0]);
       	sort($arr);
       //	var_dump($arr);
       	if(empty($arr)){
       		$data['code'] = -3;
    		$data['msg']  = '导入数据不能为空!';
       	}
       	$staff_number = array();
       	foreach ($arr as $k => $v) {
       		//获取本批次人员工号
       		$staff_number[] = $v[1];
       		//获取本批次人员存款和任务额
       		// $standard[$v[1]]['standard'] = $v[4];
       		// $standard[$v[1]]['fact'] = $v[5];
       		$_standard = $v[4];
       		$_fact = $v[5];
       		if($_fact > $_standard){
       			$standard[$v[1]]['integer'] = ($_fact - $_standard)/10000;
       		}else{
       			$standard[$v[1]]['integer'] = 0;
       		}

       	}

       	$map['staff_number'] = array('in',$staff_number);
       	$field='staff_id,staff_number,consume,current_integral,current_deposit';
       	//获取上期存款信息
       	$preInfo = \app\index\model\StaffInfo::getByNumber($map,$field);
       	//如果是第一次导入系统 上期存款信息为空
       	
       	$_preInfo = array();
       	$flag = 0;

       	if(!empty($preInfo)){
	       	foreach ($preInfo as $k => $v) {
	       		$pre_number[] = $v['staff_number'];
	       		$_preInfo[$v['staff_number']]['staff_number'] = $v['staff_number'];
	       		$_preInfo[$v['staff_number']]['staff_id']  = $v['staff_id'];
	       		$_preInfo[$v['staff_number']]['consume']  = $v['consume'];
	       		$_preInfo[$v['staff_number']]['current_integral'] = $v['current_integral'];
	       		$_preInfo[$v['staff_number']]['current_deposit'] = $v['current_deposit'];
	       	}
	    
	       	//0、如果导入有新数据则是新增员工信息
	       	if(count($staff_number) > count($pre_number)){
	       		$flag = 1;
	       		$dif_number = array_diff($staff_number - $pre_number);
	       	}
	    }else{
	    	$flag = 2;
	    }
       
       	// print_r($_preInfo);
       	// die;
       	//1、通过员工编号获取员工上期存款、消费积分
       	//2、计算员工这期获得积分，与累计积分
       	//3、跟新员工累计积分等信息
       	//4、通过累计积分更新能兑换礼品等级表信息
       	$_is = true;
       	foreach ($arr as $k => $v) {
       		if(!$flag){
       			$standard[$v[1]]['current'] = $v[5];
       			$standard[$v[1]]['standard']= $v[4];
	       	}else{

	       		if($flag == 1){
	
	       			if(in_array($v[1],$dif_number)){
	       				$arrData[$i]['password'] = md5("123456");
			       		$arrData[$i]['staff_name'] =$v[0];
			       		$arrData[$i]['staff_number'] =$v[1];
			       		$arrData[$i]['department'] = $v[2];
			       		$arrData[$i]['staff_role'] = $v[3];
			       		$arrData[$i]['standard']  = $v[4];
			       		$arrData[$i]['current_deposit'] = $v[5];
			       		$arrData[$i]['add_time'] = date("Y-m H:i:s",time());
	       			}else{
	       				$standard[$v[1]]['current'] = $v[5];
	       				$standard[$v[1]]['standard']   = $v[4];
	       			}
	       		}
	       		//第一次导入数据
	       		if($flag == 2){
		   			$arrData[$k]['password'] = md5("123456");
		       		$arrData[$k]['staff_name'] =$v[0];
		       		$arrData[$k]['staff_number'] =$v[1];
		       		$arrData[$k]['department'] = $v[2];
		       		$arrData[$k]['staff_role'] = $v[3];
		       		$arrData[$k]['standard']  = $v[4];
		       		$arrData[$k]['current_deposit'] = $v[5];
		       		$arrData[$k]['add_time'] = date("Y-m H:i:s",time());
		       	}
		    
			}
       	}
       	if(!empty($arrData)){
       		$_is = \app\index\model\StaffInfo::addAll($arrData);
       	}

    	if(	$_is ){
    		//更新员工信息表
    	
    		if(!empty($_preInfo)){
    			//3、更新员工累计积分
	    		foreach ($_preInfo as $k => $v) {
	    
	    			$accumulate['staff_id']    = $v['staff_id'];
	    			//累计积分
	    			$accumulate['accumulate'] = $v['consume'] +$standard[$k]['integer'];
	    			$accumulate['current_integral'] = $standard[$k]['integer'];
	    			//这期积分和上期比较
	    			$accumulate['previous_deposit'] = $v['current_deposit'];
	    			$accumulate['current_deposit'] = $standard[$k]['current'];
	    			$accumulate['standard'] = $standard[$k]['standard'];
	    			$updateArr[]=$accumulate;
	    		}


	    		$isUpdate = \app\index\model\StaffInfo::updateAll($updateArr);
	    	
	    		if($isUpdate){
	    			//4、通过累计积分更新能兑换礼品等级表信息
	    			$isUpdateLeve = $this->checkIntegarl($updateArr);
	    			// var_dump($isUpdateLeve );
	    			// die;
	    		}else{
	    			$data['code'] = -1;
	    			$data['msg']  = '员工数据更新失败!';
	    		}
    		}
    		if(is_array($_is)){
    			$isUpdateLeve = $this->checkIntegarl($_is , true);
    		}
    		// var_dump($isUpdateLeve);
    		// die;
    		if($isUpdateLeve){
				$data['code'] = 1;
				$data['msg']  = '导入成功!';
			}else{
				$data['code'] = -2;
				$data['msg']  = '兑换礼品等级表信息跟新失败!';
			}	    	
    	}else{
    		$data['code'] = 0;
    		$data['msg']  = '导入失败';
    	}

        return $data;
	}
	/**
	 * [checkIntegarl 获取员工积分的]
	 * @return [type] [description]
	 */
	public function checkIntegarl($arr , $add = false){

		foreach ($arr as $k => $v) {

			$tmp['staff_id'] = $v['staff_id'];
			if($add){
				$integer = ($v['current_deposit'] - $v['standard'])/10000;
			}else{
				$integer = $v['current_integral'];
			}
			
			if($integer < 10){
				continue;
			}
			
			if($integer >= 10 && $integer <= 200){
				$tmp['level_id'] = 1;
			}else if($integer >= 201 && $integer <= 400){
				$tmp['level_id'] = 2;
			}else if($integer >= 401 && $integer <= 600){
				$tmp['level_id'] = 3;
			}else if($integer >= 601 && $integer <= 800){
				$tmp['level_id'] = 4;
			}else if($integer >= 801 && $integer <= 1000){
				$tmp['level_id'] = 5;
			}else{
				$tmp['level_id'] = 6;
			}
			$data = \app\index\model\Level::getOne($tmp);
			//如果满足条件 无记录则添加记录 添加时间
			if(empty($data)){
				$tmp['evet_time'] = time();
				$tmp['is_right'] = 0;
				$tmp['min_integral'] = $integer;
				$isAdd = \app\index\model\Level::addOne($tmp);
				return $isAdd;
			}else{
				$num = $tmp['level_id'];
				$preTime = strtotime("-".$num.' month');
				// print_r( $preTime-$data['evet_time']);
				// print_r($data);
				if($data['is_right']){
					return true;
				}
				if($preTime > $data['evet_time']){
					$map['is_right'] = 1;
					$map['id']       = $data['id'];
					$is = \app\index\model\Level::updateOne($map);
					return $is;
				}

			}
		}
		return true;
	}
	/**
	 * [export 导出]
	 * @return [type] [description]
	 */
	public function export(){
		$where = array();
		$list = \app\index\model\StaffInfo::getDatas($where);
		$data = $this->doexport($list);
		return json($data);

	}
	public function doexport($arr,$path='./test.xlsx'){

		$res=Loader::import('PHPExcel.PHPExcel',EXTEND_PATH);

        $PHPExcel = new PHPExcel();
        $sheet_index = 0;
        $PHPExcel->removeSheetByIndex();
        $arr=array(
        	array(1,2,3),
        	array(4,5,6)

        	);

        foreach ($arr as $key => $values) {
        	$i = $key+1;
            $PHPExcel->createSheet();
            $PHPExcel->setActiveSheetIndex(0)->setTitle("积分管理");
            $PHPExcel->getActiveSheet()->fromArray($values, null, 'A'.$i, true);
            $sheet_index++;
        }
        $PHPExcelWriter = PHPExcel_IOFactory::createWriter($PHPExcel, 'Excel2007');
     	// $PHPExcelWriter->save('php://output');
    	// exit;
        $PHPExcelWriter->save($path);
        $this->downFile($path);
    }

    public function downFile($path){
    	header("Content-type:text/html;charset=utf-8"); 
		
		$file_name = basename($path);
		$file_name=iconv("utf-8","gb2312",$file_name);
		$file_path = dirname($path).'/'.$file_name;
		//var_dump($file_path);
		if(!file_exists($file_path)){
			echo "没有该文件文件"; 
			return ""; 
		} 
		$fp=fopen($file_path,"r"); 
		$file_size=filesize($file_path); 
		//下载文件需要用到的头 
		Header("Content-type: application/octet-stream"); 
		Header("Accept-Ranges: bytes"); 
		Header("Accept-Length:".$file_size); 
		Header("Content-Disposition: attachment; filename=".$file_name); 
		$buffer=1024; 
		$file_count=0; 
		//向浏览器返回数据 
		while(!feof($fp) && $file_count<$file_size){ 
			$file_con=fread($fp,$buffer); 
			$file_count+=$buffer; 
			echo $file_con; 
		} 
		fclose($fp); 

    }

}




 ?>