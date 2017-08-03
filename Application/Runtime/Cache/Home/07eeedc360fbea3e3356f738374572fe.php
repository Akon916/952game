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
    <title>飞扬天下</title>
    <link rel="stylesheet" href="/Public/css/reset.css"/>
    <link rel="stylesheet" href="/Public/css/footer.css"/>
    <link rel="stylesheet" href="/Public/css/aloneLogin.css"/>
</head>
<body>
<header id="header">
   <div id="header_all">
       <div>
           <a href="../index.html"><img src="/Public/image/header_02.png" alt=""/></a>
           <span>用户登录</span>
       </div>
       <div>
           <ul>
               <li><a href="../index.html">返回首页</a></li>
               <li><a href="../game.html">游戏中心</a></li>
               <li><a href="../recharge.html">充值中心</a></li>
               <li><a href="../service.html">客服中心</a></li>
           </ul>
       </div>
   </div>
</header>
<section id="section">
     <div id="section_all">
         <div id="lg_part">
             <form action="<?php echo U('user/login');?>" method="post" id="lg_msg">
                 <div id="lg_top">
                     <span>用户登录</span>
                 </div>
                 <div id="lg_down">
                     <div class="log_line">
                         <input type="text" placeholder="请输入用户名" id="username" name="name"/>
                         <span id="notice_one"></span>
                     </div>
                     <div class="log_line">
                         <input type="password" id="password" placeholder="请输入密码" name="password"/>
                         <span id="notice_two"></span>
                     </div>
                     <div>
                         <input type="checkbox"/>
                         <span>自动登录</span>
                         <a href="">忘记密码?</a>
                     </div>
                     <div>
                         <input type="submit" id="submit" value="立即登录"/>
                     </div>
                 </div>
             </form>
             <div id="third_part">
                 <a href=""><img src="/Public/image/QQ.png" alt=""/></a>
                 <a href=""><img src="/Public/image/weixin.png" alt=""/></a>
                 <a href=""><img src="/Public/image/weibo.png" alt=""/></a>
                 <a href="register.html">注册账号</a>
             </div>
         </div>
     </div>
</section>
    <?php include '/Public/footer.html' ?>
</body>
<script src="/Public/js/jquery-1.8.3.min.js"></script>
<script src="/Public/js/aloneLogin.js"></script>
</html>