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
     * [getOneInfo 获取登录用户的基本信息]
     * @return [type] [description]
     */
    public function getOneInfo(){
      //$username = input('request.username');
      $username = Session::get('ext_user.username');

      if(is_numeric($username) || empty($username)){
        $data['code'] = -1;
        $data['msg']  = '请传正确的员工标识';
      }
      $where['staff_number'] = $username;
      $info = \app\index\model\StaffInfo::getOne($where);
      return json($info);
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
      $_is= \app\index\model\User::searchOne(array('username'=>$username));
      if(!empty($_is)){
         $data['code'] = -2;
         $data['msg']  = '此管理员已经存在！';
         return json($data);
      }
      $password  = input('request.password');
      $is = \app\index\model\User::addUser($username, $password);
      if($is){
        $data['code'] = 1;
        $data['msg']  = '添加成功';
      }else{
        $data['code'] = 0;
        $data['msg']  = '添加失败';
      }
      return json($data);
    }

    /*管理员修改密码页面*/
    public function changePsw(){
      $username = Session::get('ext_user.username');
      $new_password  = input('request.new_password');
      $old_password  = input('request.old_password');
      if(empty($username) || empty($new_password) ||empty($old_password)){
        return \app\index\model\Util::json(-1, '参数不能为空');
      }
     
      $role = Session::get('ext_user.role');

      if(!empty($role) && ($role =="管理员"|| $role == "超级管理员")){
        $is = \app\index\model\User::updatePassword($username, $old_password,$new_password);
      }else{

        $map['staff_number'] = $username;
        $param['password']    = md5($new_password);
        $is = \app\index\model\StaffInfo::updateOne($param,$map);
      // echo  \app\index\model\StaffInfo::getLastSql();
      }
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
