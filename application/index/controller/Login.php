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
    //$name = Request::instance()->get('name');
    // $data = input('request.captcha');
    // if(!captcha_check($data)){
    //     return $this->error("验证码错误","location:/login");
    // };
    $check=\app\index\model\User::login($name, $password);
    if ($check) {
      $data['code'] = 1;
    }else{
      $data['code'] = 0;
    }
    return json($data);
  }


}