<?php
namespace app\index\controller;
use think\Controller;
use think\Input;
use think\Request;
use think\Session;

class Trade extends Controller{
 /**
  * 点击兑换后
  * 1、判断用户积分是否足够
  * 2、判断用户的积分要求使用时间是否足够
  * 3、以上两条件满足，扣除用户表中剩余积分，累加消耗积分
  * 4、扣除积分后，判断剩余积分所属于的积分兑换等待时间等级
  * 5、得到剩余积分等级，在level表中修改剩余积分，要兑换应该等待时间
  * 6、修改后，添加兑换记录，返回生成的兑换码
  * @return \think\response\Json
  */
 public function  getCode(){
  //每月只能兑换一次
  $limit['staff_id'] = Session::get('ext_user.staff_id');
  $beginDate = date("Y-m-d H:i:s",mktime(0, 0 , 0,date("m"),1,date("Y")));
  $endDate = date("Y-m-d H:i:s",mktime(23,59,59,date("m"),date("t"),date("Y")));
  $limit['traff_time'] = array(array('egt',$beginDate),array('elt', $endDate)) ;
  $is_limit = \app\index\model\Trade::getOne($limit,'trade_id');
  if($is_limit){
    $err['code'] = -2;
    $err['msg']  = '每月只能兑换一次！';
    return json($err);
  }
  //判断是否选择礼品
  //需要兑换的礼品的g_id
  $_map['g_id'] = input('request.gid');
  $field = 'level_id,integral,gift_name';
  $giftInfo = \app\index\model\Gift::getOne($_map,$field);
  if(empty($giftInfo)){
    $err['code'] = -1;
    $err['msg']  = '请选取有效礼品';
    return json($err);
  }
  
  $where['staff_id'] = Session::get('ext_user.staff_id');
  $where['level_id'] = $giftInfo['level_id']; 
  $integral = $giftInfo['integral']; 
  $gift_name =  $giftInfo['gift_name']; 
  $current_integral = Session::get('ext_user.current_integral');
  if($current_integral<$integral){
   $err['code'] = -1;
   $err['msg']  = '您的积分不够！';
   return json($err);
  }
  $where['is_right'] = 1;
  $res = \app\index\model\Level::getOne($where,'min_integral');
  if(empty($res)){
   $err['code'] = -1;
   $err['msg']  = '您积累积分时间还不够！';
   return json($err);
  }
   //修改个人所得积分
   $param['current_integral'] = $current_integral - $integral;
   $param['consume']= Session::get('ext_user.consume') + $integral;
   $map['staff_id'] = Session::get('ext_user.staff_id');

   $_is = \app\index\model\StaffInfo::updateOne($param,$map);
  
   if( $_is) {
    $current_integral = $param['current_integral'];
    $temp = $this->checkLevel($current_integral);
    // print_r($temp);
    // print_r($where['level_id']);
    $level_where['staff_id'] = Session::get('ext_user.staff_id');
    $level_param['evet_time'] = 0;
    $level_param['is_right'] = 0;

    for ($i = $temp['level_id']+1; $i <= $where['level_id']; $i++) {
      $level_where['level_id'] = $i;
      $iis = \app\index\model\Level::updateData($level_param, $level_where);
    }
    //修改完基础数据，确认可以兑换,添加兑换信息入库
    $num = date('Y') . str_pad(mt_rand(1, 10), 5, '0', STR_PAD_LEFT);
    $data['ver_code'] = $num;
    $data['staff_id'] = Session::get('ext_user.staff_id');
    $data['staff_number'] = Session::get('ext_user.staff_number');
    $data['gift_name'] = $gift_name;
    $data['use_integral'] = $integral;
    $is = \app\index\model\Trade::addData($data);

    if ($is) {
     $err['code'] = 1;
     $err['data'] = $num;
     $err['msg'] = '获取兑换码成功';
    } else {
     $err['code'] = 0;
     $err['msg'] = '获取兑换码失败';
    }

   }else{
     $err['code'] = -1;
     $err['msg'] = '修改个人积分失败！';
   }
   return json($err);

 }

/**
 * [checkLevel 判断剩余积分的等级]
 * @param  [type] $integer [description]
 * @return [type]          [description]
 */
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
  * [check 管理员确认领取]
  * @return [type] [description]
  */
 public function check(){
  $where['trade_id'] = input('request.trade_id');
  $param['is_confirm'] = 1;

  $is = \app\index\model\Trade::updateOne($param,$where);
  if($is){
    $err['code'] = 1;
    $err['mag']  = '确认成功';
  }else{
   $err['code'] = 0;
   $err['mag']  = '确认失败';
  }
  return json($err);


 }

}



 ?>