<?php
namespace Admin\Controller;
use Think\Controller;
class IndexController extends Controller {

    /*
     * 自动执行
     */
    public function _initialize(){
        //判断用户是否登录
        if( !session('?admin_id') ){
            //var_dump(U('login'));
            //$this->error( U('index') );
        }
    }

    public function index(){
        $this->display();
    }

    public function menu() {
        $this->display();
    }

    public function top() {
        $admin_info = getAdminInfo( session(MODULE_NAME.'_id') );//从session中获取admin_id并查询信息
        $this->assign('admin_info',$admin_info);
        $this->display();
    }

    public function bar() {
        $this->display();
    }
    public function main() {
        $this->display();
    }

}