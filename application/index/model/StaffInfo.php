<?php
namespace app\index\model;
use think\Input;

class StaffInfo extends \think\Model{

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



}



 ?>