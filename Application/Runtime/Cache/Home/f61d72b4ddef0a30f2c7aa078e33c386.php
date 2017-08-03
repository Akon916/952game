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
    <link rel="stylesheet" href="/Public/css/register.css"/>
</head>
<body>
<header id="header">
    <div id="header_all">
        <div id="header_left">
             <a href="../index.html"><img src="../image/header_02.png" alt=""/></a>
             <span>用户注册</span>
        </div>
        <div id="header_right">
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
    <div id="register">
        <div id="register_top">
            <span>个人账号注册</span>
            <div>
                <span>已有通行证？</span>
                <span><a href="aloneLogin.html">立即登录</a></span>
            </div>
        </div>
        <div id="register_down">
            <form action="">
                  <div class="reg_row">
                      <div>账&nbsp;&nbsp;&nbsp;&nbsp;户 :</div>
                      <div><input type="text"/></div>
                      <div>4到14个字符（数字、字母、下划线，不区分大小写）</div>
                  </div>
                <div class="reg_row">
                    <div>密&nbsp;&nbsp;&nbsp;&nbsp;码 :</div>
                    <div><input type="password"/></div>
                    <div>请输入密码（6-16个字符，区分大小写）</div>
                </div>
                <div class="reg_row">
                    <div>确认密码 :</div>
                    <div><input type="password"/></div>
                    <div>请输入相同的密码</div>
                </div>
                <div class="reg_row">
                    <div>验&nbsp;证&nbsp;码 :</div>
                    <div><input type="text"/></div>
                    <div id="verification_Code">-a-b-c-</div>
                </div>
                <div class="reg_row">
                    <div>邮&nbsp;&nbsp;&nbsp;&nbsp;箱 :</div>
                    <div><input type="text"/></div>
                    <div>请输入正确的邮箱，可用邮箱取回密码</div>
                </div>
                <div class="reg_row">
                    <div>手机号码 :</div>
                    <div><input type="text"/></div>
                    <div>请输入正确的手机号码（选填）</div>
                </div>
                <div class="reg_line"></div>
                <div class="reg_careful">为保障您顺畅享受游戏。根据相关法律法规，以下信息为防沉迷系统必填项。</div>
                <div class="reg_row">
                    <div>真实姓名 :</div>
                    <div><input type="text"/></div>
                    <div>请输入你的真实姓名  (如：李四)</div>
                </div>
                <div class="reg_row">
                    <div>身&nbsp;份&nbsp;证 :</div>
                    <div><input type="text"/></div>
                    <div>请输入正确的身份证号码  (如：210303198412082729)</div>
                </div>
                <div class="reg_row">
                    <input type="checkbox"/>
                    <a href="#"><span class="agreement">我接受飞扬天下网通行证使用协议和隐私政策</span></a>
                </div>
                <div class="submit_all">
                    <input type="submit" id="submit" value="提交注册"/>
                </div>
            </form>
        </div>

    </div>
</section>
<footer id="footer"></footer>
</body>
<script src="/Public/js/jquery.js"></script>
<script src="/Public/js/register.js"></script>
</html>