<?php
namespace app\index\controller;
use think\Controller;
use think\Input;
use think\Request;
use think\Session;

class Staff extends Controller{
	/**
	 * [addStaff 添加用户信息]
	 */
	public function addStaff(){
		//基本信息需要录入到User表
		$userData['username'] = input('request.number');
		$userData['password'] = input('request.password');
		$userData['role']	  = input('request.role');
		$accumulate = input('request.accumulate');
		$consume    = input('require.consume');
		if(!empty($accumulate)){
			$userData['accumulate'] = $accumulate;
		}
		if(!empty($consume)){
			$userData['consume']  = $consume;
		}
		$is = \app\index\model\User::addStaffInfo($userData);
	    if($is){
	    	//添加到数据源的信息表
	    	$param = Request::instance()->param($param);
	    	$_is = \app\index\model\StaffInfo::addStaff($param);
	    	if($_is){
	    		$data['code'] = 1;
	    		$data['msg']  = '添加用户信息成功!';
	    	}else{
	    		$data['code'] = 0;
	    		$data['msg']  = '添加用户信息表失败';
	    	}
	    }else{
	    	$data['code'] = -1;
	    	$data['msg']  = '添加到基本数据表失败';

	    }
		return json($data);
		
	}

}




 ?>