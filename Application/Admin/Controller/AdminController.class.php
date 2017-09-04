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
        if ( !IS_POST ){
            $this->display('add_admin');die;
        }
        //实例化管理员模型
        $admin = M('admin');
        //实例化表单数据
        $data = $admin->create();
        //设置添加时间
        $data['add_time'] = date('Y-m-d H:i:s');
        //密码散列加密
        $data['password'] = password_hash($data['password'],PASSWORD_DEFAULT);
        //添加用户
        if ( $admin->add($data) ){
            $this->success('添加成功');
        }else{
            $this->error('添加失败');die();
        }
    }

    //验证账号是否存在
    public function check(){
        //接受传递的数据
        $receive = $_REQUEST['name'];
        //实例化管理员模型
        $admin = M('admin');
        //构造查询条件
        $map = array('name'=>$receive);
        //查询账号
        $res = $admin->where($map)->find();
        //返回结果
        if ($res){
            echo json_encode(array('msg'=>'true'));
        }else{
            echo json_encode(array('msg'=>'false'));
        }
    }

    /*
     * 管理员登录
     */
    public function login(){
        if ( IS_POST ){
            $data = $_POST ;//接收post传递数据
            if ( !empty($data['name']) && !empty($data['password']) ){
                if ( $this->check_verify($data['verifyCode']) ){
                    $map = array('name'=>"$data[name]");        //构造查询条件
                    $admin = M('admin')->where($map)->find();   //根据账户名去数据库查询信息
                    if ( password_verify($data['password'],$admin['password']) ){ //验证密码是否正确
                        session(MODULE_NAME.'_id',$admin['id']);//用session保存管理员id
                        //session(MODULE_NAME.'_name',$admin['name']);//用session保存管理员名
                        $url = session(MODULE_NAME.'from_url') ? : U('Admin/Index/index'); //若有登录前地址，则登录后回跳，否则跳往后台首页
                        exit(json_encode(array('status'=>1,'url'=>$url)));
                    }else{
                        exit(json_encode(array('status'=>0,'msg'=>'账号密码不正确')));
                    }
                }else{
                    exit(json_encode(array('status'=>0,'msg'=>'验证码不正确')));
                }

            }
        }
        $this->display('adminLogin');
    }

    /*
     * 管理员信息获取
     */
    public function admin_Info(){
        $admin_id = session(MODULE_NAME.'_id');//获取session存储的管理员id
        $admin = M('admin')->find($admin_id);//根据id查询管理员
        var_dump($_SESSION);die;
    }
    /*
     * 管理员退出登录
    */
    public function logout(){
        session_unset();
        session_destroy();
        $this->success('退出成功',U('Admin/Admin/login'));
    }

    /*
     * 管理员密码修改
    */
    public function revisePassword(){
        if (IS_AJAX){
            $id = session(MODULE_NAME.'_id');//接受传递过来的id
            $admin_info = M('admin')->find($id);
            exit(json_encode($admin_info));
        }
        if (IS_POST){

        }
        $this->display('revise_password');
    }

    /**
     * 生成验证码
     */
    public function verify(){
        //验证码配置信息
        $config =    array(
            'fontSize'    =>    40,    // 验证码字体大小
            'length'      =>    4,     // 验证码位数
            'useNoise'    =>    false, // 关闭验证码杂点
        );
        //实例化验证码类
        $Verify =     new \Think\Verify($config);
        //输出验证码
        $Verify->entry();
    }

    /**
     * 验证验证码是否正确
     */
    // 检测输入的验证码是否正确，$code为用户输入的验证码字符串
    function check_verify($code, $id = ''){
        $verify = new \Think\Verify();
        return $verify->check($code, $id);
    }
}