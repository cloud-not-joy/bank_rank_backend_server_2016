<?php
namespace app\index\controller;
use think\Controller;
use think\Input;
use think\Request;
use think\Session;

class User extends Controller{
    /*后台页面*/
    public function index(){
       if (!session('?ext_user')) {
        header(strtolower("location: /login"));
        exit();
       }
       return $this->fetch(); 
    }
    /**
     * [addUser 超级管理员添加管理员]
     */
    public function addUser(){
      $role = Session::get('ext_user.role');
      if($role != 1){
        return json(["code"=>-1,"msg"=>"只有超级管理员有添加普通管理员权限"]);
      }
      $username = input('request.username');
      $password  = input('request.password');
      $is = \app\index\model\User::addUser($username, $password);
      if($is){
        $data['code'] = 1;
      }else{
        $data['code'] = 0;
      }
      return json($data);
    }

    /*管理员修改密码页面*/
    public function changePsw(){
      $username = Session::get('ext_user.username');
      $new_password  = input('request.new_password');
      $old_password  = input('request.old_password');
      $is = \app\index\model\User::updatePassword($username, $old_password,$new_password);
      if($is){
        $data['code'] = 1;
      }else{
        $data['code'] = 0;
      }
      return json($data);
       
    }
    /*用户退出登录*/
    public function logout(){
      \app\index\model\User::logout();
      if (!session('?ext_user')) {
       $data['code'] = 1;
      }else{
        $data['code'] = 0;
      }
      return json($data);
    }

  

    
}
