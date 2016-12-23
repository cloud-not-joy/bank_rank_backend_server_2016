<?php
namespace app\index\model;

use think\Input;

class User extends \think\Model{
    /*登录验证*/
    public static function login($name, $password){

        $where['username'] = $name;
        $where['password'] = md5($password);

        $user=User::where($where)->find()->toArray();
        $role = $user['role'] ;
        if($role == 1){
            $user['role'] = '超级管理员';
        } else if($role == 2){
            $user['role'] = '管理员';
        } else {
            $user['role'] = '员工';
        }
        if ($user) {
            unset($user["password"]);
            session("ext_user", $user);
            return $user;
        }else{
            return false;
        }
    }
    /**
     * [addUser 添加管理员]
     * @param [type] $name     [description]
     * @param [type] $password [description]
     */
    public static function addUser($name, $password ,$role = 2){
        $user = new User();
        $user->username = $name;
        $user->password = md5($password);
        $user->role     = $role;
        $user->save();
        return $user->user_id;
    }
    /**
     * [addStaffInfo 管理员添加员工基本数据]
     * @param [type] $param [description]
     */
    public static function addStaffInfo($param){
        $user = new User($param);
        $user->save();
        return $user->user_id;
    }

    /*退出登录*/
    public static function logout(){
        session("ext_user", NULL);
        return ; 
    }

    /*查询一条数据*/
    public static function searchOne($name){
        $where['username'] = $name;
        $user=User::field('accumulate,consume')->where($where)->find();
        if(!empty($user)){
            $user = $user->toArray();
        }
        return $user;
    }

    /*更改用户密码*/
    public static function updatePassword($name,$old,$newpassword){
        $where['username'] = $name;
        $where['password'] = md5($old);
        $user = User::where($where)->update(['password' => md5($newpassword)]);
        if ($user) {
            return true;
        }else{
            return false;
        }
    }

    /**
     * [getByNumber 通过条件查找]
     * @param  [type] $where [description]
     * @return [type]        [description]
     */
    public static function getByNumber($where=array(),$field=''){
        $list = array();
        $user = new User();
        $list = $user->field($field)->where($where)->select();
        // echo $user->getLastSql();
        // die;
        $res = array();
        foreach($list as $key=>$val){ 
            $res[] = $val->toArray();
        } 
        return $res;
    }

} 
