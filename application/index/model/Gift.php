<?php
namespace app\index\model;
use think\Input;

class Gift extends \think\Model{
	/*添加礼物*/
	public static function addGift($param){
		$staff = new Gift($param);
        $res = $staff->allowField(true)->save(); 
        return $res;       
	}
	/*删除礼物*/
	public static function delGift($where){
		return Gift::destroy($where);
	}
	/*修改礼物*/
	public static function updateGift($param){
		return Gift::update($param);
	}
	/*礼物列表*/
	public static function getList(){
		$gift = new Gift();
		// 查询数据集
		$gift->limit(10)
		    ->order('int', 'desc')
		    ->select();
	}

}


 ?>