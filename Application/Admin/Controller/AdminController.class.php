<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/8/4
 * Time: 17:50
 */

namespace Admin\Controller;
use Think\Controller;

class AdminController extends Controller
{
    //管理员列表
    public function index(){
        $this->display('admin_list');
    }

    //管理员注册
    public function register(){

    }

    //管理员登录
    public function login(){

    }

    //管理员退出登录
    public function logout(){

    }
}