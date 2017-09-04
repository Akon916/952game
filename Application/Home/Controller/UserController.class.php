<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/7/18
 * Time: 17:03
 */

namespace Home\Controller;
//use function Sodium\add;
use Think\Controller;

class UserController extends Controller{

    public function index(){
        $this->display('register');
    }

    /**
     *  注册
     */
    public  function register(){
        //判断是否是注册表单传递过来
        if (IS_POST){
            //接受验证码
            $code = $_POST['code'];
            //验证证码是否正确
            if ( $this->check_verify($code)){
                //实例化模型类
                $user = M('user');
                //自动收集表单，创建数据
                $user->create() ;
                //密码MD5加密
                $user->password = password_hash($this->password);
                //添加注册时间
                $user->registerTime = date('Y-m-d H:i:s',time());
                //添加数据至数据库
                if (  $user->add($user) ) {
                    $this->success('注册成功！');
                }else{
                    $this->error('注册失败！请重试');
                }
            }else{
                $this->error('验证码不正确！');
            }
        }else{
            die('非正常提交！');
        }
    }

    /**
     * 用户普通登录
     */
    public function login() {
        //前端登录界面ajax查询是否存在用户名
        if (IS_AJAX) {
            //得到所有用户名
            $users = M('user')->field('name')->find();
            //接受传递过来的登录用户名
            $user_name = $_POST['login_name'];
            //判断登录用户名是否在用户名数组里
            if (in_array($user_name,$users)) {
                //在
                echo json_encode(true);
            }else{
                //不在
                echo json_encode(false);
            }
        }

        //验证登录
        if ( ! IS_AJAX ) {
            //接受传递过来的信息
            $username = $_POST['name'];
            $password = $_POST['password'];
            //拼接查询条件
            $map['name'] = $username;
            //$map['game_password'] = md5($password);
            //取数据库查询，密码与用户名是否匹配
            $hash = M('user')->where($map)->getField('password');
            //
            if ( password_verify($password,$hash) ) {
                $this->success('登陆成功',U('index/index'));
            }else{
                $this->redirect('user/loginfail');
            }
        }
    }

    /**
     * 普通登录界面
     */
    public function aloneLogin() {
        $this->display('aloneLogin');
    }

    /**
     * 登录失败跳转页面
     */

    public function loginfail() {
        $this->display();
    }

    /**
     * 验证码
     */
    public function verify(){
        //验证码配置信息
        $config =    array(
            'fontSize'    =>    40,    // 验证码字体大小
            'length'      =>    3,     // 验证码位数
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