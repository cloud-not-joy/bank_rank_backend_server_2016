<?php
namespace app\index\model;
use think\Input;

class Gift extends \think\Model{
	/*添加礼物*/
	public static function addGift($param){
		$staff = new Gift($param);
        $res = $staff->allowField(true)->save(); 
        return $res;       
	}
	/*删除礼物*/
	public static function delGift($where){
		return Gift::destroy($where);
	}
	/*修改礼物*/
	public static function updateGift($param,$map){
		return Gift::save($param,$map);
	}
	/**
	 * [getOne description]
	 * @param  [type] $where [description]
	 * @return [type]        [description]
	 */
	public static function getOne($where , $field){
        $gift = Gift::field($field)->where($where)->find();
        if(!empty($gift)){
            $gift = $gift->toArray();
            return $gift;
        }else{
            return false;
        }
    }
    /**
     * [getDatas 获取数据]
     * @return [type] [description]
     */
    public static function getDatas($where=array(),$field='gift_name'){
        $gift = new Gift();
        $list = $gift->field($field)->where($where)->select();
        $res = array();
        foreach($list as $key=>$val){ 
            $tmp = $val->toArray();
            array_push($res,$tmp);
        } 
        return $res;
    
    }
	/*礼物列表*/
	public static function getPageData($param,$field){
        // 查询数据集
        $list = Gift::field($field)->limit($param['page'],$param['page_size'])->order('integral', 'desc')->select();
       // echo Gift::getLastSql();
        $_list = array();
        $count = Gift::count();
        foreach ($list as $k => $val) {
            $tmp = $val->toArray(); 
            array_push($_list, $tmp);
        }
        $res['data']  = $_list;
        $res['count'] = $count;
        $res['page']  = $param['page']+1;
        return $res;
    }

}


 ?>