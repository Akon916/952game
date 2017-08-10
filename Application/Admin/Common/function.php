<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/8/9
 * Time: 15:28
 */


/*
 * 根据id返回admin信息
 */
function getAdminInfo($admin_id = 0){
     return  M('admin')->where("id = $admin_id")->find();
}