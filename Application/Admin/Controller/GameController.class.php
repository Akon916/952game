<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/7/21
 * Time: 10:13
 */

namespace Admin\Controller;
use Think\Controller;

class GameController extends Controller
{

    //游戏列表
    public function index()
    {
        //接受传递过来的查询参数
        $name = $_POST['name'] ? : '' ;
        $name ? $map['game_name']=array('LIKE',"%$name%"): '';

        $game = M('game'); // 实例化User对象
        $count = $game->where($map)->count();// 查询满足要求的总记录数
        $Page = new \Think\Page($count,5);// 实例化分页类 传入总记录数和每页显示的记录数(25)

        $Page -> lastSuffix = false;
        $Page -> setConfig('header','条数：%TOTAL_ROW%条');
        $Page -> setConfig('first','首页');
        $Page -> setConfig('last','尾页');
        $Page -> setConfig('prev','上一页');
        $Page -> setConfig('next','下一页');

        $show = $Page->show();// 分页显示输出
        // 进行分页数据查询 注意limit方法的参数要使用Page类的属性
        $list = $game->where($map)->order('game_id')->limit($Page->firstRow.','.$Page->listRows)->select();
        $this->assign('list',$list);// 赋值数据集
        $this->assign('page',$show);// 赋值分页输出
        $this->display('game_list'); // 输出模板
    }

    //游戏添加
    public function addGame()
    {
        //判断是否是表单提交
        if (IS_POST) {
            $this->_add();die();
        }
        //跳转至编辑页面
        $this->display('edit_game');
    }

    //游戏添加
    protected function _add()
    {
        //实例化模型
        $games = M('game');
        //接受表单数据
        $data = $games->create();
        //判断是否上传头像
        if (!empty($_FILES['game_icon']['name'])){
            $res = $this->uploadIcon();//获取图标路径信息
            $data['game_icon'] = $res['icon'];//保存图标路径
            $data['game_thumbIcon'] = $res['thumbIcon'];//保存是缩略图路径
        }
        //判断是否上传游戏图片
        if (!empty(array_filter($_FILES['game_image']['name']))){
            $res = $this->uploadImages();//获取图片路径信息
            $data['game_image'] = implode(';',$res['Images']);//保存图片路径成数组
            $data['game_thumbImage'] = implode(';',$res['thumbImages']);//保存图片缩略图路径成数组
        }
        //添加时间
        $data['game_addTime'] = date('Y-m-d H:i:s',time());

        //添加数据至数据库
        $res = $games->add($data);
        if ($res){
            $this->success('操作成功！');
        }else{
            $this->error('操作失败！');
        }
    }

    //游戏编辑
    public function editGame()
    {
        //判断是否是表单传递过来
        if (IS_POST){
            $this->_edit();die();
        }
        //跳转至编辑页面
            //接受传递过来的游戏id
        $id = $_GET['id'];
            //实例化模型
        $games = M('game');
            //查询相应id的游戏信息
        $info = $games->find($id);
        //转变游戏主图缩略图地址为数组形式
        $info['game_thumbimage'] = explode(';',$info['game_thumbimage']);
        //转变游戏主图地址为数组形式
        $info['game_image'] = explode(';',$info['game_image']);
        //分配变量值模板
        $this->assign('info',$info);
        $this->display('edit_game');
    }

    protected function _edit()
    {
        //实例化模型
        $game = M('game');
        //接受表单数据
        $data = $game->create();
        //判断是否重新上传头像
        if (!empty($_FILES['game_icon']['name'])){
            $res = $this->uploadIcon();//获取图标路径信息
            $data['game_icon'] = $res['icon'];//保存图标路径
            $data['game_thumbIcon'] = $res['thumbIcon'];//保存是缩略图路径
            $icon = $_POST['icon'];//接受并保存原头像路径
            $icon_url = "./Uploads/gameIcon/".$icon;//拼接头像文件路径
            $mini_icon = "./Uploads/gameIcon/thumb/".'mini_'.substr($icon,9);//拼接头像缩略图文件路径
            unlink("$icon_url");//删除被替换头像原文件
            unlink("$mini_icon");//删除被替换头像缩略图文件
        }
        //判断是否重新上传游戏图片
        if (!empty(array_filter($_FILES['game_image']['name']))){
            $res = $this->uploadImages();//保存图片路径
            $data['game_image'] = implode(';',$res['Images']);//以字符串形式保存更新的图片路径信息
            $data['game_thumbImage'] = implode(';',$res['thumbImages']);//以字符串形式保存更新的图片缩略图信息
            $images = $_POST['images'];//接受并保存原图片路径
            $arr = array_keys(array_filter($_FILES['game_image']['name']));//将$_FILES中上传文件的下标组成数组
            //循环删除被替换的原图片与其缩略图
            foreach ( $images as $k => $v){
                if (in_array($k,$arr)){ //判断是否有图片被替换，若有则删除旧图
                    unlink('./Uploads/gameImages/thumb/'.'mini_'.substr($v,9));//删除缩略图
                    unlink('./Uploads/gameImages/'.$v);//删除图片
                }else{
                    $data['game_image'] = $v.';'.$data['game_image'];//将未替换的图片保留至数据库
                    $data['game_thumbImage'] = 'mini_'.substr($v,9).';'.$data['game_thumbImage'];//保留缩略图
                }
            };
        }
        //设置更新时间
        $data['game_lastModified'] = date('Y-m-d H:i:s');
        //更新游戏信息
        if ($game->save($data)){
            $this->success('更新成功！',U('index'));
        }else{
            $this->error($game->getError());
        }
    }

    //游戏管理删除功能
    public function deleteGame()
    {
        //接收传递来的id
        $id = $_GET['id'];
       //实例化模型
        $game = M('game');
       //获得对应id游戏信息
        $info = $game->find($id);
        //删除图标图片
        unlink("./Uploads/gameIcon/".$info['game_icon']);
        unlink("./Uploads/gameIcon/thumb/".'mini_'.substr($info['game_icon'],9));
        //删除游戏主图图片
        foreach (explode(';',$info['game_image']) as $v){
            unlink('./Uploads/gameImages/thumb/'.'mini_'.substr($v,9));//删除缩略图
            unlink('./Uploads/gameImages/'.$v);//删除图片
        }

       //删除对应id游戏
        $res = $game->delete($id);
        if ( $res ){
            //删除成功
            $this->redirect( 'index');
        }else{
            //删除失败
            $this->error('删除失败');
        }
    }

    //游戏批量删除
    public function deleteAll()
    {
        //接受传递过来的ids
        $ids = $_REQUEST['ids'];
        //将ids组装成数组
        $ids = explode(',',$ids);
        //实例化模型
        $game = M('game');
        //查询多条记录
        $map['game_id'] = array('in',$ids);
        $infos = $game->where($map)->select();
        //遍历删除
        foreach ( $infos as $info){
            //删除图标图片
            unlink("./Uploads/gameIcon/".$info['game_icon']);
            unlink("./Uploads/gameIcon/thumb/".'mini_'.substr($info['game_icon'],9));
            //删除游戏主图图片
            foreach (explode(';',$info['game_image']) as $v){
                unlink('./Uploads/gameImages/thumb/'.'mini_'.substr($v,9));//删除缩略图
                unlink('./Uploads/gameImages/'.$v);//删除图片
            }

            //删除对应id游戏
            $res = $game->delete($info['game_id']);
            if ( $res ){
                //删除成功
                $suc[] = $info['game_id'];
            }else{
                //删除失败
                $err[] = $info['game_id'];
            }
        }
        //删除情况
        $json = array(
            'err'=>$err,
            'suc'=>$suc,
            'ids'=>$ids
        );
        echo json_encode($json);

    }

    //上传游戏图标
    public function uploadIcon()
    {
        $upload = new \Think\Upload();// 实例化上传类
        $upload->maxSize = 3145728;// 设置附件上传大小
        $upload->exts = array('jpg', 'gif', 'png', 'jpeg');// 设置附件上传类型
        $upload->rootPath = './Uploads/gameIcon/'; // 设置附件上传根目录
        $upload->savePath = ''; // 设置附件上传（子）目录
        $upload->saveName = array('uniqid', '');// 采用GUID序列命名
        $upload->autoSub = true; // 开启子目录保存 并以日期（格式为Ymd）为子目录
        $upload->subName = array('date', 'Ymd');
        // 上传单个文件
        $info = $upload->uploadOne($_FILES['game_icon']);
        if (!$info) {    // 上传错误提示错误信息
            $this->error($upload->getError());
        } else {  // 上传成功 获取上传文件信息

            //生成缩略图
            $image = new \Think\Image();
            $image->open($upload->rootPath . $info['savepath'] . $info['savename']);//打开缩略图原图
            $thumb_path = './Uploads/gameIcon/thumb/';//缩略图保存路径
            $thumb_name = $thumb_path . 'mini_' . $info['savename'];//缩略图全路径
            $image->thumb(60, 60,2)->save("$thumb_name");// 按照原图的比例生成一个最大为60*60的缩略图并保存
            if( !$image ){ //生成缩略图成功
                $this->error($image->getError());//上传错误信息
            }
            //缩略图文件路径
            $thumb_save = 'mini_' . $info['savename'];
            //游戏头像路径
            $icon_save = $info['savepath'] . $info['savename'];
            //返回路径信息
            return array(
                'thumbIcon' => $thumb_save,
                'icon'      => $icon_save,
            );
        }
    }

    //上传游戏主图
    public function uploadImages()
    {
        //配置上传信息
        $config = array(
            'maxSize' => 3145728, // 设置附件上传大小
            'rootPath' => './Uploads/gameImages/', // 设置附件上传根目录
            'savePath' => '', // 设置附件上传（子）目录
            'saveName' => array('uniqid', ''), // 采用GUID序列命名
            'exts' => array('jpg', 'gif', 'png', 'jpeg'), // 设置附件上传类型
            'autoSub' => true, // 开启子目录保存 并以日期（格式为Ymd）为子目录
            'subName' => array('date', 'Ymd'),
        );
        $upload = new \Think\Upload($config);// 实例化上传类
        // 上传文件
        $info = $upload->upload(array($_FILES['game_image']));
        if (!$info) {    // 上传错误提示错误信息
            $this->error($upload->getError());
        } else {  // 上传成功 获取上传文件信息
            $image = new \Think\Image();//开启GD库
            foreach ($info as $file) {
                $data[] = $file['savepath'] . $file['savename'];//游戏主图信息
                $image->open($config['rootPath'].$file['savepath'].$file['savename']);//打开缩略图原图
                $thumb_path = './Uploads/gameImages/thumb/';//缩略图保存路径
                $thumb_name = $thumb_path . 'mini_' . $file['savename'];//缩略图全路径
                $image->thumb(120, 120,2)->save("$thumb_name");// 按照原图的比例生成一个最大为120的缩略图并保存
                //缩略图文件路径
                $thumb_save[] = 'mini_' . $file['savename'];

            }
            //返回路径信息
            return array(
                'thumbImages'=>$thumb_save,
                'Images'=>$data,
            );
        }
    }








}