<?php
namespace app\index\controller;
use think\Controller;

class Index extends Controller{

    public function login(){
  	
       return $this->fetch();
    }
    /**
     * [upload 上传礼物图片]
     * @return [type] [description]
     */
    public function upload(){
	    // 获取表单上传文件 例如上传了001.jpg
	    $file = request()->file('image');
	    // 移动到框架应用根目录/public/uploads/ 目录下
	    $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads');
	    if($info){
	        // 成功上传后 获取上传信息
	        $path = DS . 'uploads'.DS.$info->getSaveName();
	        $data['code'] = 1;
	        $data['path'] = $path;
	    }else{
	        // 上传失败获取错误信息
	        $data['code'] = 0;
	        $data['msg'] = $file->getError();
	    }
	   	return json($data);
	}


}
