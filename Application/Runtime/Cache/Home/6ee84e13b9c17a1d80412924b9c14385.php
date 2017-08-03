<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="format-detection" content="telephone=no, email=no" />
    <link rel="stylesheet" href="/Public/css/reset.css"/>
    <link rel="stylesheet" href="/Public/css/loginFail.css"/>
    <title>飞扬天下</title>
    <title></title>
</head>
<body>
<div id="main">
  <div id="main_all">
      <div id="part_one">
         <h3>登录失败！</h3>
      </div>
      <div id="part_two">
          <h3>用户登录密码错误</h3>
          <p>.......
             <span id="dataS">5</span>
              秒之后跳转
          </p>
          <div id="aa">立即跳转</div>
      </div>
  </div>
</div>
</body>
<script src="/Public/js/jquery-1.8.3.min.js"></script>
<script src="/Public/js/loginFail.js"></script>
</html>