<?php

namespace app\index\model;
use think\Input;

class Trade extends \think\Model{

    public static function getDatas($where=array(),$field=''){
        $trade = new Trade();
        $list = $trade->field($field)->where($where)->select();
        //echo $trade->getLastSql();

        $res = array();
        foreach($list as $key=>$val){ 
            $res[] = $val->toArray();
        } 
        return $res;
    
    }
    /**
	 * [getOne description]
	 * @param  [type] $where [description]
	 * @return [type]        [description]
	 */
	public static function getOne($where, $field){
        $gift = Trade::field($field)->where($where)->find();
        if(!empty($gift)){
            $gift = $gift->toArray();
            return $gift;
        }else{
            return false;
        }
    }

}
?>