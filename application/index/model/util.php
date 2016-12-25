<?php
namespace app\index\model;

use think\Input;

class Util extends \think\Model{
    /* 统一返回函数 */
    public static function json($code, $msg, $data){
        $res['code'] = $code;
        $res['msg']  = $msg;
        $res['data'] = $data;

        return json($res);
    }


}
