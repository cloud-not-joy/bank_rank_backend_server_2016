<?php
  function objectToArray($list){
        $res = array();
        foreach($list as $key=>$val){ 
            $res[] = $val->toArray();
        } 
        return $res;
    }


 ?>