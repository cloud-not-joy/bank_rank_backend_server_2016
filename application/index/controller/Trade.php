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
  $where['staff_id'] = Session::get('ext_user.staff_id');
  $where['level_id'] = input('request.level_id');
  $integral = input('request.integral');
  $gift_name = input('request.gift_name');
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
//  var_dump($current_integral);
//  var_dump($integral);
  //die;
   $param['current_integral'] = $current_integral - $integral;
   $param['consume']= Session::get('ext_user.consume') + $integral;
   $map['staff_id'] = Session::get('ext_user.staff_id');

//  print_r($map);
   $_is = \app\index\model\StaffInfo::updateOne($param,$map);

   if(true) {
    $current_integral = $param['current_integral'];
    $temp = $this->checkLevel($current_integral);
    print_r($temp);
    print_r($where['level_id']);
    $level_where['staff_id'] = Session::get('ext_user.staff_id');
    if($where['level_id']== 1){
     $param['evet_time'] = 0;
     $level_where['level_id'] = 1;
     $iis = \app\index\model\Level::updateData($param, $level_where);
     var_dump($iis);
    } else if ($temp['level_id'] = $where['level_id']) {
     //修改level表 这个员工全部时间归零
     for ($i = 1; $i < $temp['level_id']; $i++) {
      $param['evet_time'] = 0;
      $level_where['level_id'] = $i;
      $iis = \app\index\model\Level::updateData($param, $level_where);
      print_r($iis);
     }

    } else {
     if ($temp['level_id'] == 0) {
      $temp['level_id'] = 1;
     }
     for ($i = $temp['level_id']; $i < $where['level_id']; $i++) {
      $param['evet_time'] = 0;
      $level_where['level_id'] = $i;
      $iis = \app\index\model\Level::updateData($param, $level_where);
     }
    }
    $num = date('Y') . str_pad(mt_rand(1, 10), 5, '0', STR_PAD_LEFT);
    $data['ver_code'] = $num;
    $data['traff_id'] = Session::get('ext_user.traff_id');
    $data['traff_number'] = Session::get('ext_user.traff_number');
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
   }

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

 public function check(){
  $where['traff_id'] = input('request.traff_id');
  $where['ver_code'] = input('request.ver_code');
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