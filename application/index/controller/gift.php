<?php
namespace app\index\controller;
use think\Controller;
use think\Input;
use think\Request;
use think\Session;

class Gift extends Controller{
	/**
	 * [giftList 礼品列表]
	 * @return [type] [description]
	 */
	public function giftList(){
		$page = empty(input('request.page')) ? 1 : input('request.page');
    	$pageSize = input('request.page_size');
    	$data['page_size'] = empty($pageSize) ? 10 : $pageSize;
    	$data['page'] = ($page -1)*$data['page_size'];
    	$field ='g_id,gift_name,integral,gift_img';
    	$list = \app\index\model\Gift::getPageData($data,$field);
    	if(!empty($list)){
    		return \app\index\model\Util::json(1, '返回礼品数据', $list);
    	}

	}
	/**
	 * [addGift 添加礼物]
	 */
	public function addGift(){
		$param = Request::instance()->param();
		if(empty($param['gift_name']) || empty($param['gift_img']) || empty($param['integral'])){
			$data['code'] = -1;
			$data['msg']  = '参数不能为空';
			return json($data);
		}

		$temp = $this->checkLevel($param['integral']);
		$param['level_id'] = $temp['level_id'];
		$param['g_time'] = date("Y-m-d H:i:s",time());
		$is = \app\index\model\Gift::addGift($param);
		if($is){
			$data['code'] = 1;
			$data['msg']  = '添加成功';
		}else{
			$data['code'] = 0;
			$data['msg']  = '添加成功';
		}
		return json($data);
	}
	public function checkLevel($integer){

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
		}else if($integer>1001){
			$tmp['level_id'] = 6;
		}else{
			$tmp['level_id'] = 0;
		}
		return $tmp;
	}
	/**
	 * [delGift 管理员删除礼品]
	 * @return [type] [description]
	 */
	public function delGift(){
		$gid = input('request.g_id');
		if(empty($gid)){
			$data['code'] = -1;
			$data['msg']  = '参数不能为空';
			return json($data);
		}
		$where['g_id'] = $gid;
		$is = \app\index\model\Gift::delGift($where);
		if($is){
			$data['code'] = 1;
			$data['msg']  = '删除成功';
		}else{
			$data['code'] = 0;
			$data['msg']  = '删除失败';
		}
		return json($data);
	}
	/**
	 * [updateGift 修改礼物]
	 * @return [type] [description]
	 */
	public function updateGift(){
		$param = Request::instance()->param();
		if(empty($param['g_id']) || empty($param['gift_name']) || empty($param['gift_img']) || empty($param['integral'])){
			$data['code'] = -1;
			$data['msg']  = '参数不能为空';
			return json($data);
		}
		$temp = $this->checkLevel($param['integral']);
		$param['level_id'] = $temp['level_id'];
		$is = \app\index\model\Gift::updateGift($param);

		if($is){
			$data['code'] = 1;
			$data['msg']  = '修改成功';
		}else{
			$data['code'] = 0;
			$data['msg']  = '修改失败';
		}
		return json($data);

	}

}





 ?>