<?php if (!defined('THINK_PATH')) exit();?>﻿<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>左侧导航</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="/Public/Admin/css/adminStyle.css" rel="stylesheet" type="text/css" />
<script src="/Public/Admin/js/jquery.js"></script>
<script src="/Public/Admin/js/public.js"></script>
</head>
<body style="background:#313131">
<div class="menu-list">
 <a href="main.html" target="mainCont" class="block menu-list-title center" style="border:none;margin-bottom:8px;color:#fff;">起始页</a>
 <ul>
  <li class="menu-list-title">
   <span>订单管理</span>
   <i>◢</i>
  </li>
  <li>
   <ul class="menu-children">
    <li><a href="../../Public/order_list.html" title="商品列表" target="mainCont">订单列表</a></li>
   </ul>
  </li>
 
  <li class="menu-list-title">
   <span>游戏管理</span>
   <i>◢</i>
  </li>
<!--  <li>
   <ul class="menu-children">
    <li><a hrgame_list.htmlhtml" title="商品列表" target="mainCont">商品列表</a></li>
    <li><a href="product_category.html" title="商品分类" target="mainCont">商品分类</a></li>
    <li><a href="recycle_bin.html" title="商品分类" target="mainCont">商品回收站</a></li>
   </ul>
  </li>-->
  <li>
   <ul class="menu-children">
    <li><a href="<?php echo U('game/index');?>" title="游戏列表" target="mainCont">游戏列表</a></li>
    <li><a href="../../Public/product_category.html" title="商品分类" target="mainCont">商品分类</a></li>
    <li><a href="../../Public/recycle_bin.html" title="商品分类" target="mainCont">商品回收站</a></li>
   </ul>
  </li>
  
  <li class="menu-list-title">
   <span>会员管理</span>
   <i>◢</i>
  </li>
  <li>
   <ul class="menu-children">
    <li><a href="../../Public/user_list.html" title="会员列表" target="mainCont">会员列表</a></li>
    <li><a href="../../Public/add_user.html" title="添加会员" target="mainCont">添加会员</a></li>
    <li><a href="../../Public/user_rank.html" title="会员等级" target="mainCont">会员等级</a></li>
    <li><a href="../../Public/user_message.html" title="会员留言" target="mainCont">会员留言</a></li>
   </ul>
  </li>
  
  <li class="menu-list-title">
   <span>系统设置</span>
   <i>◢</i>
  </li>
  <li>
   <ul class="menu-children">
    <li><a href="../../Public/basic_settings.html" title="站点基本设置" target="mainCont">站点基本设置</a></li>
    <li><a href="../../Public/admin_list.html" title="站点基本设置" target="mainCont">站点管理员</a></li>
   </ul>
  </li>
  
  <li class="menu-list-title">
   <span>广告管理</span>
   <i>◢</i>
  </li>
  <li>
   <ul class="menu-children">
    <li><a href="../../Public/advertising_list.html" title="站点基本设置" target="mainCont">广告列表</a></li>
   </ul>
  </li>
    
 </ul>
</div>
<div class="menu-footer">© 更多模板：<a href="http://www.mycodes.net/" target="_blank">源码之家</a></div>
</body>
</html>