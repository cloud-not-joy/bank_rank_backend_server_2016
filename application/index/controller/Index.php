<?php
namespace app\index\controller;
use think\Controller;

class Index extends Controller{

	public function index() {
        function get_url() {
            $sys_protocal = isset($_SERVER['SERVER_PORT']) && $_SERVER['SERVER_PORT'] == '443' ? 'https://' : 'http://';
            $php_self = $_SERVER['PHP_SELF'] ? $_SERVER['PHP_SELF'] : $_SERVER['SCRIPT_NAME'];
            $path_info = isset($_SERVER['PATH_INFO']) ? $_SERVER['PATH_INFO'] : '';
            $relate_url = isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : $php_self.(isset($_SERVER['QUERY_STRING']) ? '?'.$_SERVER['QUERY_STRING'] : $path_info);
            return $sys_protocal.(isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : '').$relate_url;
        }

        $currentUrl = get_url();
        $currentUrl = str_replace('index.php', 'pages/index.html', $currentUrl);
	    return $this->redirect($currentUrl, 302);;
	}
	
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
