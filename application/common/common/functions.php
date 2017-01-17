<?php
    function objectToArray($list){
        $res = array();
        foreach($list as $key=>$val){ 
            $res[] = $val->toArray();
        } 
        return $res;
    }

    function ajax_success($code=1,$msg='',$data=array()){
    	$res['code'] = $code;
    	$res['msg']  = $msg;
    	$res['data'] = $data;
    	return json($res);

    }



 ?>