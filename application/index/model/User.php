<?php
namespace app\index\model;

use think\Input;
use think\Session;

class User extends \think\Model{
    /**
     * [delGift 删除管理员]
     * @param  [type] $where [description]
     * @return [type]        [description]
     */
    public static function delUser($where){
        return User::destroy($where);
    }
    /**
     * [getPageData fenye]
     * @param  [type] $param [description]
     * @param  [type] $field [description]
     * @return [type]        [description]
     */
    public static function getPageData($param,$field){
        // 查询数据集
        $list = User::field($field)->limit($param['page'],$param['page_size'])->order('role', 'desc')->select();
       // echo Gift::getLastSql();
        $_list = array();
        $count = User::count();
        foreach ($list as $k => $val) {
            $tmp = $val->toArray(); 
            array_push($_list, $tmp);
        }
        $res['data']  = $_list;
        $res['count'] = $count;
        $res['page']  = $param['page']+1;
        return $res;
    }
    public static function updateData($param,$map){
        return User::where($map)->update($param);
    }
    /*登录验证*/
    public static function login($name, $password){

        $where['username'] = $name;
        $where['password'] = md5($password);

        $user=User::where($where)->find();
        if(empty($user)){
           return false;
        }
        $user = $user->toArray();
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
            // var_dump(session('ext_user'));
            // die;
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
    public static function searchOne($where){
        $user=User::where($where)->find();
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

    public static function updateOne($data , $map){
        $user = new User();
        $res = $user->allowField(true)->save($data,$map);
        //echo User::getLastSql();
        return $res;
    }

} 
