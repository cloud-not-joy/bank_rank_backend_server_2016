<?php
namespace app\index\model;
use think\Input;

class Gift extends \think\Model{
	/*添加礼物*/
	public static function addStaff($param){
		$staff = new StaffInfo($param);
        $res = $staff->allowField(true)->save(); 
        return $res;       
	}

}


 ?>