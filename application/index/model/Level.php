<?php
namespace app\index\model;
use think\Input;

class Level extends \think\Model{

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
    /**
     * [getDatas 获取数据]
     * @return [type] [description]
     */
    public static function getDatas($where=array(),$field='level_id'){
        $level = new Level();
        $list = $level->field($field)->where($where)->select();
        //echo $level->getLastSql();
        $res = array();
        foreach($list as $key=>$val){ 
            $res[] = $val->toArray();
        } 
        return $res;
    
    }

    public static function getOne($where,$field='level_id'){
        $level = Level::field($field)->where($where)->find();
        if(!empty($level)){
            $level = $level->toArray();
            return $level;
        }else{
            return false;
        }
    }

}






 ?>