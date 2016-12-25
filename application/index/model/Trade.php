<?php

namespace app\index\model;
use think\Input;

class Trade extends \think\Model{

    public static function getDatas($where=array(),$field=''){
        $trade = new Trade();
        $list = $trade->field($field)->where($where)->order('staff_number', 'asc')->select();
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

    public  static function addData($data){
        $trade = new Trade($data);
        $res = $trade->allowField(true)->save();
        return $res;

    }

    public static function updateOne($param, $map){
        $trade = new Trade();
        return $trade->allowField(true)->save($param,$map);
    }
    
    

}
?>