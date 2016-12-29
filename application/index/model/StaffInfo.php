<?php
namespace app\index\model;
use think\Input;

class StaffInfo extends \think\Model{
    /**
     * [getPageData 得到员工列表分页数据]
     * @return [type] [description]
     */
    public static function getPageData($param){
        // 查询数据集
        $list = StaffInfo::limit($param['page'],$param['page_size'])->order('current_integral', 'desc')->select();
       // echo StaffInfo::getLastSql();

        $_list = [];

        $count = StaffInfo::count();
        foreach ($list as $k => $val) {
            $tmp = $val->toArray();
            unset($tmp['password']);
            array_push($_list, $tmp);
        }
        $res['staffs'] = $_list;
        $res['count'] = $count;
        $res['page']  = $param['page']+1;
        return $res;
    }
    /*删除员工*/
    public static function delStaff($where){
        return StaffInfo::destroy($where);
    }
    /*修改员工*/
    public static function updateStaff($param,$map){
        return StaffInfo::where($map)->update($param);
    }

	/*管理员录入员工信息*/
	public static function addStaff($param){
		$staff = new StaffInfo($param);
        $res = $staff->allowField(true)->save(); 
        return $res;       
	}
    /**
     * [员工 获取指定条件下某条员工数据信息]
     * @param  [type] $where [description]
     * @return [type]        [description]
     */
    public static function getOne($where){
        $staffInfo = staffInfo::where($where)->find();
        if(!empty($staffInfo)){
            $staffInfo = $staffInfo->toArray();
            unset($staffInfo['password']);
            return $staffInfo;
        }else{
            return false;
        }
    }
	/**
	 * [searchOne 获取员工登录后的基础数据]
	 * @param  [type] $name [description]
	 * @return [type]       [description]
	 */
	public static function searchOne($name){
        $where['staff_number'] = $name;
        $month = date('Y-m',time());
        $where['add_time'] = ['like',"$month%"];
        $user = $_user = array();
        //获取本期标准和实际
        $user = StaffInfo::field('standard,fact') -> where($where)->find();
        //echo StaffInfo::getLastSql();

        if(!empty($user)){
            $user = $user->toArray();
        	$user['current_fact'] = $user['fact'];
            unset($user['fact']);
        }
        

       //获取上期
        $lastMonth = date("Y-m",strtotime("-1 month"));
        $_user=StaffInfo::field('add_time,standard',true) -> where($where)->find();
        if(!empty($_user)){
            $_user = $_user->toArray();
        }
        $res = array_merge($user,$_user);
        //var_dump($res);
        return $res;
    }
    /**
     * [addAll 批量新增数据]
     * @param [type] $list [description]
     */
    public static function addAll($list){
        $staff = new StaffInfo;
        $list = $staff->saveAll($list);
        $res = array();
        foreach($list as $key=>$val){ 
            $tmp = $val->toArray();
            unset($tmp['password']);
            $res[] = $tmp;
        } 

        return $res;
    }
    /**
     * [getDatas 获取数据]
     * @return [type] [description]
     */
    public static function getDatas($where=array()){

        $list = array();
        $staff = new StaffInfo();
        $list = $staff->where($where)->select();
        $res = array();
        foreach($list as $key=>$val){ 
            $res[] = $val->toArray();
        } 
        return $res;
    
    }
    /**
     * [getByNumber 通过条件查找]
     * @param  [type] $where [description]
     * @return [type]        [description]
     */
    public static function getByNumber($where=array(),$field=''){
        $list = array();
        $user = new StaffInfo();
        $list = $user->field($field)->where($where)->select();
        // echo $user->getLastSql();
        // die;
        $res = array();
        foreach($list as $key=>$val){ 
            $res[] = $val->toArray();
        } 
        return $res;
    }
    /**
     * [updateAll 批量更新操作用户积分、存款数据]
     * @return [type] [description]
     */
    public static function updateAll($list){
        $user = new StaffInfo();
        $list = $user->saveAll($list);
        return $list;
        // var_dump($list);

    }
    /**
     * [login 员工登录]
     * @param  [type] $name     [description]
     * @param  [type] $password [description]
     * @return [type]           [description]
     */
    public static function login($name, $password){

        $where['staff_number'] = $name;
        $where['password'] = md5($password);
        $user = StaffInfo::where($where)->find();
        if(empty($user)){
           return false;
        }
        $user = $user->toArray();
        //echo StaffInfo::getLastSql();
        unset($user["password"]);
        $user['username'] = $user['staff_number'];
        session("ext_user", $user);
        return $user;
    }
    public static function updateOne($data , $map){
        $user = new StaffInfo();
        $res = $user->allowField(true)->save($data,$map);
        //echo User::getLastSql();
        return $res;
    }


}



 ?>