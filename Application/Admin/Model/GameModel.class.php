<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/7/19
 * Time: 10:53
 */

namespace Admin\Model;
use Think\Model;

class UserModel extends Model
{
    //定义数据表字段
    protected $fields = array('game_id','game_name','game_type','game_recommend',
        'game_played','game_description','game_details','game_icon','game_image','game_addTime','game_lastModified','game_lastModifier','_PK'=>'game_id');



}