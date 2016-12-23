<?php
namespace app\index\model;
use think\Input;

class Level extends \think\Model{
	/**
     * [getOne 根据数组条件]
     * @return [type] [description]
     */
    public static function getOne($where=array(),$field=''){
    	$res = array();
        $level=Level::field($field)->where($where)->find();
       // echo Level::getLastSql();
         if(!empty($level)){
            $res = $level->toArray();
        }
        return $res;
    }
    /**
     * [updateOne 根据条件更新某条信息]
     * @param  [type] $map [description]
     * @return [type]      [description]
     */
    public static function updateOne($map){
        $level = new Level();
        $where['id'] = $map['id'];
        unset($map['id']);
        return $level->allowField(true)->save($map,$where);         
    }
    /**
     * [addOne 添加一条礼品积分信息]
     */
    public static function addOne($data){
        $level = new Level($data);
        return $level->allowField(true)->save();

    }

}






 ?>