<?php
namespace app\index\controller;
use think\Controller;
use think\Input;
use think\Request;
use think\Session;

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

}




 ?>