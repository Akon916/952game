<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/7/19
 * Time: 10:53
 */

namespace Home\Model;
use Think\Model;

class UserModel extends Model
{
    //定义数据表字段
    protected $fields = array('game_id','game_name','game_password','game_email',
        'game_telephone','game_truename','game_IDcard','game_registerTime','_PK'=>'game_id');
}