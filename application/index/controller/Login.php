<?php
namespace app\index\controller;
use think\Input;
use think\Controller;
use think\Request;
use Captcha;
class Login extends Controller{

  public function login(){
      //return $this->fetch('login');
  }

  public function toLogin(){  

    $name = input('request.username');
    $password  = input('request.password');
    if(empty($name) || empty($password)){
      $data['code'] = -1;
      $data['msg']  = '用户名或者密码不能为空';
      return json($data);
    }
    
    $where['username'] = $name;
    $user =  \app\index\model\User::searchOne($where);
    if(!empty($user)){
      $info=\app\index\model\User::login($name, $password);
    }else{
      $info=\app\index\model\StaffInfo::login($name, $password);
    }
    
    if ($info) {
      $data['code'] = 1;
      $data['msg']  = '登录成功';
      $data['data'] = $info;
    }else{
      $data['code'] = 0;
      $data['msg']  = '用户名或者密码错误';
    }
    return json($data);
  }


}