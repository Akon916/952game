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
    <title>飞扬测试</title>
    <link rel="stylesheet" href="/Public/css/reset.css"/>
    <link rel="stylesheet" href="/Public/css/index.css"/>
    <link rel="stylesheet" href="/Public/css/animate.css"/>
</head>
<body>
<header id="header">
    <div id="header_box">
        <div id="header_box_one">
            <a href="#">H5网页游戏</a>
            <span>|</span>
            <a href="game.html">H5小游戏</a>
        </div>
        <div id="header_box_two">
            <a href="javascript:void(0);" onclick="SetHome(this,window.location.href)">设为首页</a>
            <span>|</span>
            <a href="javascript:void(0);" onclick="toDesktop(window.location.href,document.title)">放在桌面</a>
            <span>|</span>
            <a href="javascript:void(0);" id="collect" onclick="AddFavorite(window.location.href,document.title)" >设为收藏</a>
        </div>

        <div id="header_box_three">
            <div class="header_box_three_bor">
                <a href="#" id="login_all">登录</a>
                <a href="#" id="sign_out">退出</a>
            </div>
            <div class="header_box_three_bor"><a href="<?php echo U('user/index');?>">注册</a></div>
        </div>
        <div id="header_box_four">
            <div class="header_box_four_one">所有游戏</div>
            <div class="header_box_four_two" >
                <img src="/Public/image/xiaobiao.png" style="width: 15px; height: 15px;" alt=""/>
            </div>
            <div class="header_box_four_three">
                <div class="header_box_four_three_em"></div>
                <div class="header_box_four_three_tran">
                    <table>
                        <tr>
                            <td><a href="">大战神 <img src="/Public/image/hot.png" style="width: 25px; height:auto;" alt=""/></a></td>
                            <td><a href="">主宰</a></td>
                            <td><a href="">风云无双</a></td>
                            <td><a href="">三国令</a></td>
                        </tr>
                        <tr>
                            <td><a href="">大战神</a></td>
                            <td><a href="">主宰</a></td>
                            <td><a href="">风云无双</a></td>
                            <td><a href="">三国令</a></td>
                        </tr>
                        <tr>
                            <td><a href="">大战神</a></td>
                            <td><a href="">主宰</a></td>
                            <td><a href="">风云无双</a></td>
                            <td><a href="">三国令</a></td>
                        </tr>
                        <tr>
                            <td><a href="">大战神</a></td>
                            <td><a href="">主宰</a></td>
                            <td><a href="">风云无双</a></td>
                            <td><a href="">三国令</a></td>
                        </tr>

                        <tr>
                            <td><a href="">大战神</a></td>
                            <td><a href="">主宰</a></td>
                            <td><a href="">风云无双</a></td>
                            <td><a href="model.html">更多»</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</header>
<nav id="nav">
    <div id="nav_top">
        <div class="nav_pic" >
            <img src="/Public/image/header_02.png" alt="飞扬天下"/>
        </div>
        <ul id="nav_tab">
            <li class="animated bounceInLeft tar_hover"><a id="first_head" href="index.html">首页</a></li>
            <li class="animated bounceInLeft tar_hover"><a href="cartoon/cartoon.html">漫画专题</a></li>
            <li class="animated bounceInLeft tar_hover"><a href="point.html">积分商城</a></li>
            <li class="animated bounceInRight tar_hover"><a href="forum.html">玩家论坛</a></li>
            <li class="animated bounceInRight tar_hover"><a href="recharge.html">充值中心</a></li>
            <li class="animated bounceInRight tar_hover"><a href="service.html">客服充值</a></li>
        </ul>
        <div id="search">
            <input type="search" id="search_btn"/>
            <img id="search_pic" src="/Public/image/search.png" style="width: 25px; height: 25px;" alt=""/>
        </div>
    </div>
</nav>
<!--登录-->
<div id="login_Re">
    <div id="login_Re_W">
        <div class="login">
            <div class="login_pad">
                <div class="login_one"><span>账号登录</span></div>
                <div class="login_two">账号 &nbsp; <input type="text" id="name_text_one" placeholder="用户名/手机号"/></div>
                <div class="login_two">密码 &nbsp; <input type="password" id="name_pass_one" placeholder="密码"/></div>
                <div class="login_three">
                    <input type="checkbox" value="1"/>下次自动登录
                    <a href="#">忘记密码</a>
                </div>
                <div class="login_four" id="login_enter_one">
                    <button>登录</button>
                </div>
                <div class="login_five">
                    <ul>
                        <li><a href="#">QQ<img src="/Public/image/QQ.png" style="width: 20px;height: 20px;" alt=""/></a></li>
                        <li><a href="#">微信<img src="/Public/image/weixin.png" style="width: 20px;height: 20px;" alt=""/></a></li>
                        <li><a href="#">微博<img src="/Public/image/weibo.png" style="width: 20px;height: 20px;" alt=""/></a></li>
                    </ul>
                    <a class="login_register" href="<?php echo U('user/index');?>">注册账号</a>
                </div>
            </div>
        </div>
        <div id="person_frame">
            <div>
                <div>
                    <img src="/Public/image/weixin.png" style="width: 80px;height: 80px" alt=""/>
                </div>
                <div>
                    <div>
                        <span id="person_frame_login"></span>
                    </div>
                    <div id="person_frame_down">
                        <span>个人中心</span>
                        <span id="person_frame_close">[ 退出 ]</span>
                    </div>
                </div>
            </div>
            <div>
                <span>参与的游戏</span>
            </div>
        </div>
    </div>

</div>
<!--轮播图-->
<div id="banner">
    <div id="slideBox" class="slideBox">
        <div class="hd">
            <ul><li></li><li></li><li></li></ul>
        </div>
        <div class="bd">
            <ul>
                <li><a href="#" target="_blank"><img src="/Public/image/bannerBig.jpg" /></a></li>
                <li><a href="#" target="_blank"><img src="/Public/image/bannerBig2.jpg" /></a></li>
                <li><a href="#" target="_blank"><img src="/Public/image/bannerBig.jpg" /></a></li>
            </ul>
        </div>
    </div>
</div>
<section id="section">
    <!--精彩推荐-->
    <div id="section_boutique">
            <fieldset id="section_boutique_all">
                <legend>精品推荐</legend>
                <div id="section_boutique_all_top">
                    <div id="section_boutique_switch">》》热门游戏</div>
                    <div><img src="/Public/image/next.png" style="width: 20px;height: 20px;" alt=""/>换一批</div>
                </div>
                <div class="section_boutique_all_down" id="section_boutique_part_one">
                    <div class="section_boutique_all_down_cld">
                         <div><img src="/Public/image/shendao.jpg" style="width: 100px; height:100px;border-radius:10px;" alt=""/></div>
                         <div>
                             <h4>大战神</h4>
                             <img src="/Public/image/haoping.png" style="width: 80px; height: auto;" alt="好评"/>
                             <span>动作，冒险</span>
                             <span>5万人玩过</span>
                         </div>
                         <div>
                             <div>开始游戏</div>
                             <div>手机上玩</div>
                         </div>
                    </div>
                    <div class="section_boutique_all_down_cld">
                        <div><img src="/Public/image/shendao.jpg" style="width: 100px; height:100px;border-radius:10px;" alt=""/></div>
                        <div>
                            <h4>大战神</h4>
                            <img src="/Public/image/haoping.png" style="width: 80px; height: auto;" alt="好评"/>
                            <span>动作，冒险</span>
                            <span>5万人玩过</span>
                        </div>
                        <div>
                            <div>开始游戏</div>
                            <div>手机上玩</div>
                        </div>
                    </div>
                    <div class="section_boutique_all_down_cld">
                        <div><img src="/Public/image/shendao.jpg" style="width: 100px; height:100px;border-radius:10px;" alt=""/></div>
                        <div>
                            <h4>大战神</h4>
                            <img src="/Public/image/haoping.png" style="width: 80px; height: auto;" alt="好评"/>
                            <span>动作，冒险</span>
                            <span>5万人玩过</span>
                        </div>
                        <div>
                            <div>开始游戏</div>
                            <div>手机上玩</div>
                        </div>
                    </div>
                    <div class="section_boutique_all_down_cld">
                        <div><img src="/Public/image/shendao.jpg" style="width: 100px; height:100px;border-radius:10px;" alt=""/></div>
                        <div>
                            <h4>大战神</h4>
                            <img src="/Public/image/haoping.png" style="width: 80px; height: auto;" alt="好评"/>
                            <span>动作，冒险</span>
                            <span>5万人玩过</span>
                        </div>
                        <div>
                            <div>开始游戏</div>
                            <div>手机上玩</div>
                        </div>
                    </div>
                    <div class="section_boutique_all_down_cld">
                        <div><img src="/Public/image/shendao.jpg" style="width: 100px; height:100px;border-radius:10px;" alt=""/></div>
                        <div>
                            <h4>大战神</h4>
                            <img src="/Public/image/haoping.png" style="width: 80px; height: auto;" alt="好评"/>
                            <span>动作，冒险</span>
                            <span>5万人玩过</span>
                        </div>
                        <div>
                            <div>开始游戏</div>
                            <div>手机上玩</div>
                        </div>
                    </div>
                    <div class="section_boutique_all_down_cld">
                        <div><img src="/Public/image/shendao.jpg" style="width: 100px; height:100px;border-radius:10px;" alt=""/></div>
                        <div>
                            <h4>大战神</h4>
                            <img src="/Public/image/haoping.png" style="width: 80px; height: auto;" alt="好评"/>
                            <span>动作，冒险</span>
                            <span>5万人玩过</span>
                        </div>
                        <div>
                            <div>开始游戏</div>
                            <div>手机上玩</div>
                        </div>
                    </div>
                </div>
                <div class="section_boutique_all_down" id="section_boutique_part_two">
                    <div class="section_boutique_all_down_cld">
                        <div><img src="/Public/image/shendao.jpg" style="width: 100px; height:100px;border-radius:10px;" alt=""/></div>
                        <div>
                            <h4>大战神2</h4>
                            <img src="/Public/image/haoping.png" style="width: 80px; height: auto;" alt="好评"/>
                            <span>动作，冒险</span>
                            <span>5万人玩过</span>
                        </div>
                        <div>
                            <div>开始游戏</div>
                            <div>手机上玩</div>
                        </div>
                    </div>
                    <div class="section_boutique_all_down_cld">
                        <div><img src="/Public/image/shendao.jpg" style="width: 100px; height:100px;border-radius:10px;" alt=""/></div>
                        <div>
                            <h4>大战神2</h4>
                            <img src="/Public/image/haoping.png" style="width: 80px; height: auto;" alt="好评"/>
                            <span>动作，冒险</span>
                            <span>5万人玩过</span>
                        </div>
                        <div>
                            <div>开始游戏</div>
                            <div>手机上玩</div>
                        </div>
                    </div>
                    <div class="section_boutique_all_down_cld">
                        <div><img src="/Public/image/shendao.jpg" style="width: 100px; height:100px;border-radius:10px;" alt=""/></div>
                        <div>
                            <h4>大战神2</h4>
                            <img src="/Public/image/haoping.png" style="width: 80px; height: auto;" alt="好评"/>
                            <span>动作，冒险</span>
                            <span>5万人玩过</span>
                        </div>
                        <div>
                            <div>开始游戏</div>
                            <div>手机上玩</div>
                        </div>
                    </div>
                    <div class="section_boutique_all_down_cld">
                        <div><img src="/Public/image/shendao.jpg" style="width: 100px; height:100px;border-radius:10px;" alt=""/></div>
                        <div>
                            <h4>大战神2</h4>
                            <img src="/Public/image/haoping.png" style="width: 80px; height: auto;" alt="好评"/>
                            <span>动作，冒险</span>
                            <span>5万人玩过</span>
                        </div>
                        <div>
                            <div>开始游戏</div>
                            <div>手机上玩</div>
                        </div>
                    </div>
                    <div class="section_boutique_all_down_cld">
                        <div><img src="/Public/image/shendao.jpg" style="width: 100px; height:100px;border-radius:10px;" alt=""/></div>
                        <div>
                            <h4>大战神2</h4>
                            <img src="/Public/image/haoping.png" style="width: 80px; height: auto;" alt="好评"/>
                            <span>动作，冒险</span>
                            <span>5万人玩过</span>
                        </div>
                        <div>
                            <div>开始游戏</div>
                            <div>手机上玩</div>
                        </div>
                    </div>
                    <div class="section_boutique_all_down_cld">
                        <div><img src="/Public/image/shendao.jpg" style="width: 100px; height:100px;border-radius:10px;" alt=""/></div>
                        <div>
                            <h4>大战神2</h4>
                            <img src="/Public/image/haoping.png" style="width: 80px; height: auto;" alt="好评"/>
                            <span>动作，冒险</span>
                            <span>5万人玩过</span>
                        </div>
                        <div>
                            <div>开始游戏</div>
                            <div>手机上玩</div>
                        </div>
                    </div>
                </div>
            </fieldset>
    </div>
    <!--最新游戏-->
    <div id="section_newGame">
        <fieldset id="section_newGame_one">
            <legend>最新游戏</legend>
            <div id="section_newGame_one_top">
                <span>最新游戏</span>
                <span>More»</span>
            </div>
            <div id="section_newGame_one_down">
                <div class="section_newGame_one_down_size">
                    <div>
                        <img src="/Public/image/shendao.jpg" style="width:80px;height: 80px; border-radius: 10px;" alt=""/>
                    </div>
                    <div>
                        <span>大战神</span>
                        <span>6000人在玩</span>
                        <span>开始游戏</span>
                    </div>
                </div>
                <div class="section_newGame_one_down_size">
                    <div>
                        <img src="/Public/image/shendao.jpg" style="width:80px;height: 80px; border-radius: 10px;" alt=""/>
                    </div>
                    <div>
                        <span>大战神</span>
                        <span>6000人在玩</span>
                        <span>开始游戏</span>
                    </div>
                </div>
                <div class="section_newGame_one_down_size">
                    <div>
                        <img src="/Public/image/shendao.jpg" style="width:80px;height: 80px; border-radius: 10px;" alt=""/>
                    </div>
                    <div>
                        <span>大战神</span>
                        <span>6000人在玩</span>
                        <span>开始游戏</span>
                    </div>
                </div>
                <div class="section_newGame_one_down_size">
                    <div>
                        <img src="/Public/image/shendao.jpg" style="width:80px;height: 80px; border-radius: 10px;" alt=""/>
                    </div>
                    <div>
                        <span>大战神</span>
                        <span>6000人在玩</span>
                        <span>开始游戏</span>
                    </div>
                </div>
                <div class="section_newGame_one_down_size">
                    <div>
                        <img src="/Public/image/shendao.jpg" style="width:80px;height: 80px; border-radius: 10px;" alt=""/>
                    </div>
                    <div>
                        <span>大战神</span>
                        <span>6000人在玩</span>
                        <span>开始游戏</span>
                    </div>
                </div>
                <div class="section_newGame_one_down_size">
                    <div>
                        <img src="/Public/image/shendao.jpg" style="width:80px;height: 80px; border-radius: 10px;" alt=""/>
                    </div>
                    <div>
                        <span>大战神</span>
                        <span>6000人在玩</span>
                        <span>开始游戏</span>
                    </div>
                </div>
                <div class="section_newGame_one_down_size">
                    <div>
                        <img src="/Public/image/shendao.jpg" style="width:80px;height: 80px; border-radius: 10px;" alt=""/>
                    </div>
                    <div>
                        <span>大战神</span>
                        <span>6000人在玩</span>
                        <span>开始游戏</span>
                    </div>
                </div>
                <div class="section_newGame_one_down_size">
                    <div>
                        <img src="/Public/image/shendao.jpg" style="width:80px;height: 80px; border-radius: 10px;" alt=""/>
                    </div>
                    <div>
                        <span>大战神</span>
                        <span>6000人在玩</span>
                        <span>开始游戏</span>
                    </div>
                </div>
                <div class="section_newGame_one_down_size">
                    <div>
                        <img src="/Public/image/shendao.jpg" style="width:80px;height: 80px; border-radius: 10px;" alt=""/>
                    </div>
                    <div>
                        <span>大战神</span>
                        <span>6000人在玩</span>
                        <span>开始游戏</span>
                    </div>
                </div>
                <div class="section_newGame_one_down_size">
                    <div>
                        <img src="/Public/image/shendao.jpg" style="width:80px;height: 80px; border-radius: 10px;" alt=""/>
                    </div>
                    <div>
                        <span>大战神</span>
                        <span>6000人在玩</span>
                        <span>开始游戏</span>
                    </div>
                </div>
                <div class="section_newGame_one_down_size">
                    <div>
                        <img src="/Public/image/shendao.jpg" style="width:80px;height: 80px; border-radius: 10px;" alt=""/>
                    </div>
                    <div>
                        <span>大战神</span>
                        <span>6000人在玩</span>
                        <span>开始游戏</span>
                    </div>
                </div>
                <div class="section_newGame_one_down_size">
                    <div>
                        <img src="/Public/image/shendao.jpg" style="width:80px;height: 80px; border-radius: 10px;" alt=""/>
                    </div>
                    <div>
                        <span>大战神</span>
                        <span>6000人在玩</span>
                        <span>开始游戏</span>
                    </div>
                </div>
            </div>
        </fieldset>
        <fieldset id="section_newGame_two">
            <legend>新闻资讯</legend>
            <div id="section_newGame_two_top">
                <span>新闻资讯</span>
                <span>More»</span>
            </div>
            <div id="section_newGame_two_down">
                <ul>
                    <li><span>◆</span><a href="#">752g《剑侠情缘》4月20日更新维护公告</a></li>
                    <li><span>◆</span><a href="#">752g《剑侠情缘》4月20日更新维护公告</a></li>
                    <li><span>◆</span><a href="#">752g《剑侠情缘》4月20日更新维护公告</a></li>
                    <li><span>◆</span><a href="#">752g《剑侠情缘》4月20日更新维护公告</a></li>
                    <li><span>◆</span><a href="#">752g《剑侠情缘》4月20日更新维护公告</a></li>
                    <li><span>◆</span><a href="#">752g《剑侠情缘》4月20日更新维护公告</a></li>
                    <li><span>◆</span><a href="#">752g《剑侠情缘》4月20日更新维护公告</a></li>
                    <li><span>◆</span><a href="#">752g《剑侠情缘》4月20日更新维护公告</a></li>
                    <li><span>◆</span><a href="#">752g《剑侠情缘》4月20日更新维护公告</a></li>
                    <li><span>◆</span><a href="#">752g《剑侠情缘》4月20日更新维护公告</a></li>
                </ul>
            </div>
        </fieldset>
    </div>
    <div id="section_hot">
        <fieldset id="section_hot_all">
            <legend>热门游戏</legend>
            <div>
                <span>热门游戏</span>
                <span>More»</span>
            </div>
            <div id="section_hot_all_down">
                <div class="section_hot_all_down_many">
                    <div class="section_hot_all_main">
                        <img src="/Public/image/tangmen.jpg" style="width: 280px; height:115px;" alt=""/>
                        <div class="section_hot_icon">
                            <ul>
                                <li><a href="#"><img src="/Public/image/libao.png" style="width: 20px;height: 20px;" alt=""/>礼包</a></li>
                                <li><a href="#"><img src="/Public/image/guan.png" style="width: 20px;height: 20px;" alt=""/>官网</a></li>
                                <li><a href="#"><img src="/Public/image/enter.png" style="width: 20px;height: 20px;" alt=""/>进入游戏</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>风云无双</div>
                </div>
                <div class="section_hot_all_down_many">
                    <div class="section_hot_all_main">
                        <img src="/Public/image/tangmen.jpg" style="width: 280px; height:115px;" alt=""/>
                        <div class="section_hot_icon">
                            <ul>
                                <li><a href="#"><img src="/Public/image/libao.png" style="width: 20px;height: 20px;" alt=""/>礼包</a></li>
                                <li><a href="#"><img src="/Public/image/guan.png" style="width: 20px;height: 20px;" alt=""/>官网</a></li>
                                <li><a href="#"><img src="/Public/image/enter.png"style="width: 20px;height: 20px;" alt=""/>进入游戏</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>风云无双</div>
                </div>
                <div class="section_hot_all_down_many">
                    <div class="section_hot_all_main">
                        <img src="/Public/image/tangmen.jpg" style="width: 280px; height:115px;" alt=""/>
                        <div class="section_hot_icon">
                            <ul>
                                <li><a href="#"><img src="/Public/image/libao.png" style="width: 20px;height: 20px;" alt=""/>礼包</a></li>
                                <li><a href="#"><img src="/Public/image/guan.png" style="width: 20px;height: 20px;" alt=""/>官网</a></li>
                                <li><a href="#"><img src="/Public/image/enter.png"style="width: 20px;height: 20px;" alt=""/>进入游戏</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>风云无双</div>
                </div>
                <div class="section_hot_all_down_many">
                    <div class="section_hot_all_main">
                        <img src="/Public/image/tangmen.jpg" style="width: 280px; height:115px;" alt=""/>
                        <div class="section_hot_icon">
                            <ul>
                                <li><a href="#"><img src="/Public/image/libao.png" style="width: 20px;height: 20px;" alt=""/>礼包</a></li>
                                <li><a href="#"><img src="/Public/image/guan.png" style="width: 20px;height: 20px;" alt=""/>官网</a></li>
                                <li><a href="#"><img src="/Public/image/enter.png"style="width: 20px;height: 20px;" alt=""/>进入游戏</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>风云无双</div>
                </div>
                <div class="section_hot_all_down_many">
                    <div class="section_hot_all_main">
                        <img src="/Public/image/tangmen.jpg" style="width: 280px; height:115px;" alt=""/>
                        <div class="section_hot_icon">
                            <ul>
                                <li><a href="#"><img src="/Public/image/libao.png" style="width: 20px;height: 20px;" alt=""/>礼包</a></li>
                                <li><a href="#"><img src="/Public/image/guan.png" style="width: 20px;height: 20px;" alt=""/>官网</a></li>
                                <li><a href="#"><img src="/Public/image/enter.png"style="width: 20px;height: 20px;" alt=""/>进入游戏</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>风云无双</div>
                </div>
                <div class="section_hot_all_down_many">
                    <div class="section_hot_all_main">
                        <img src="/Public/image/tangmen.jpg" style="width: 280px; height:115px;" alt=""/>
                        <div class="section_hot_icon">
                            <ul>
                                <li><a href="#"><img src="/Public/image/libao.png" style="width: 20px;height: 20px;" alt=""/>礼包</a></li>
                                <li><a href="#"><img src="/Public/image/guan.png" style="width: 20px;height: 20px;" alt=""/>官网</a></li>
                                <li><a href="#"><img src="/Public/image/enter.png"style="width: 20px;height: 20px;" alt=""/>进入游戏</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>风云无双</div>
                </div>
                <div class="section_hot_all_down_many">
                    <div class="section_hot_all_main">
                        <img src="/Public/image/tangmen.jpg" style="width: 280px; height:115px;" alt=""/>
                        <div class="section_hot_icon">
                            <ul>
                                <li><a href="#"><img src="/Public/image/libao.png" style="width: 20px;height: 20px;" alt=""/>礼包</a></li>
                                <li><a href="#"><img src="/Public/image/guan.png" style="width: 20px;height: 20px;" alt=""/>官网</a></li>
                                <li><a href="#"><img src="/Public/image/enter.png"style="width: 20px;height: 20px;" alt=""/>进入游戏</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>风云无双</div>
                </div>
                <div class="section_hot_all_down_many">
                    <div class="section_hot_all_main">
                        <img src="/Public/image/tangmen.jpg" style="width: 280px; height:115px;" alt=""/>
                        <div class="section_hot_icon">
                            <ul>
                                <li><a href="#"><img src="/Public/image/libao.png" style="width: 20px;height: 20px;" alt=""/>礼包</a></li>
                                <li><a href="#"><img src="/Public/image/guan.png" style="width: 20px;height: 20px;" alt=""/>官网</a></li>
                                <li><a href="#"><img src="/Public/image/enter.png"style="width: 20px;height: 20px;" alt=""/>进入游戏</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>风云无双</div>
                </div>
            </div>
        </fieldset>
    </div>
    <div id="section_stand_alone">
        <fieldset id="section_stand_alone_one">
            <legend>热门单机</legend>
            <div class="section_stand_alone_one_top">
                <span>热门单机</span>
                <span>more»</span>
            </div>
            <div>
                <div class="section_newGame_one_down_size">
                    <div>
                        <img src="/Public/image/shendao.jpg" style="width:80px;height: 80px; border-radius: 10px;" alt=""/>
                    </div>
                    <div>
                        <span>大战神</span>
                        <span>6000人在玩</span>
                        <span>开始游戏</span>
                    </div>
                </div>
                <div class="section_newGame_one_down_size">
                    <div>
                        <img src="/Public/image/shendao.jpg" style="width:80px;height: 80px; border-radius: 10px;" alt=""/>
                    </div>
                    <div>
                        <span>大战神</span>
                        <span>6000人在玩</span>
                        <span>开始游戏</span>
                    </div>
                </div>
                <div class="section_newGame_one_down_size">
                    <div>
                        <img src="/Public/image/shendao.jpg" style="width:80px;height: 80px; border-radius: 10px;" alt=""/>
                    </div>
                    <div>
                        <span>大战神</span>
                        <span>6000人在玩</span>
                        <span>开始游戏</span>
                    </div>
                </div>
                <div class="section_newGame_one_down_size">
                    <div>
                        <img src="/Public/image/shendao.jpg" style="width:80px;height: 80px; border-radius: 10px;" alt=""/>
                    </div>
                    <div>
                        <span>大战神</span>
                        <span>6000人在玩</span>
                        <span>开始游戏</span>
                    </div>
                </div>
                <div class="section_newGame_one_down_size">
                    <div>
                        <img src="/Public/image/shendao.jpg" style="width:80px;height: 80px; border-radius: 10px;" alt=""/>
                    </div>
                    <div>
                        <span>大战神</span>
                        <span>6000人在玩</span>
                        <span>开始游戏</span>
                    </div>
                </div>
                <div class="section_newGame_one_down_size">
                    <div>
                        <img src="/Public/image/shendao.jpg" style="width:80px;height: 80px; border-radius: 10px;" alt=""/>
                    </div>
                    <div>
                        <span>大战神</span>
                        <span>6000人在玩</span>
                        <span>开始游戏</span>
                    </div>
                </div>
                <div class="section_newGame_one_down_size">
                    <div>
                        <img src="/Public/image/shendao.jpg" style="width:80px;height: 80px; border-radius: 10px;" alt=""/>
                    </div>
                    <div>
                        <span>大战神</span>
                        <span>6000人在玩</span>
                        <span>开始游戏</span>
                    </div>
                </div>
                <div class="section_newGame_one_down_size">
                    <div>
                        <img src="/Public/image/shendao.jpg" style="width:80px;height: 80px; border-radius: 10px;" alt=""/>
                    </div>
                    <div>
                        <span>大战神</span>
                        <span>6000人在玩</span>
                        <span>开始游戏</span>
                    </div>
                </div>
                <div class="section_newGame_one_down_size">
                    <div>
                        <img src="/Public/image/shendao.jpg" style="width:80px;height: 80px; border-radius: 10px;" alt=""/>
                    </div>
                    <div>
                        <span>大战神</span>
                        <span>6000人在玩</span>
                        <span>开始游戏</span>
                    </div>
                </div>
                <div class="section_newGame_one_down_size">
                    <div>
                        <img src="/Public/image/shendao.jpg" style="width:80px;height: 80px; border-radius: 10px;" alt=""/>
                    </div>
                    <div>
                        <span>大战神</span>
                        <span>6000人在玩</span>
                        <span>开始游戏</span>
                    </div>
                </div>
                <div class="section_newGame_one_down_size">
                    <div>
                        <img src="/Public/image/shendao.jpg" style="width:80px;height: 80px; border-radius: 10px;" alt=""/>
                    </div>
                    <div>
                        <span>大战神</span>
                        <span>6000人在玩</span>
                        <span>开始游戏</span>
                    </div>
                </div>
                <div class="section_newGame_one_down_size">
                    <div>
                        <img src="/Public/image/shendao.jpg" style="width:80px;height: 80px; border-radius: 10px;" alt=""/>
                    </div>
                    <div>
                        <span>大战神</span>
                        <span>6000人在玩</span>
                        <span>开始游戏</span>
                    </div>
                </div>
            </div>
        </fieldset>
        <fieldset id="section_stand_alone_two">
            <legend>礼包领取</legend>
            <div class="section_stand_alone_one_top">
                <span>礼包领取</span>
                <span>more»</span>
            </div>
            <div id="section_stand_alone_two_down">
                 <div class="section_stand_alone_rel">
                        <a href="#" class="package_left">大战神新手卡</a>
                 </div>
                 <div class="section_stand_alone_pst">
                    <div class="section_newGame_one_down_size">
                        <div>
                            <img src="/Public/image/shendao.jpg" style="width:80px;height: 80px; border-radius: 10px;" alt=""/>
                        </div>
                        <div>
                            <span>大战神</span>
                            <span>6000人在玩</span>
                            <span>开始游戏</span>
                        </div>
                    </div>
                    <div class="section_newGame_one_down_jdu">
                        <div>
                            <img src="/Public/image/jindu.png" style="width: 59px; height: 59px" alt=""/>
                        </div>
                        <div>
                            剩余30%
                        </div>
                    </div>
                </div>
                 <div class="section_stand_alone_rel">
                        <a href="#" class="package_left">大战神新手卡</a>
                    </div>
                 <div class="section_stand_alone_pst">
                        <div class="section_newGame_one_down_size">
                            <div>
                                <img src="/Public/image/shendao.jpg" style="width:80px;height: 80px; border-radius: 10px;" alt=""/>
                            </div>
                            <div>
                                <span>大战神</span>
                                <span>6000人在玩</span>
                                <span>开始游戏</span>
                            </div>
                        </div>
                        <div class="section_newGame_one_down_jdu">
                            <div>
                                <img src="/Public/image/jindu.png" style="width: 59px; height: 59px" alt=""/>
                            </div>
                            <div>
                                剩余30%
                            </div>
                        </div>
                    </div>
                <div class="section_stand_alone_rel">
                    <a href="#" class="package_left">大战神新手卡</a>
                </div>
                <div class="section_stand_alone_pst">
                    <div class="section_newGame_one_down_size">
                        <div>
                            <img src="/Public/image/shendao.jpg" style="width:80px;height: 80px; border-radius: 10px;" alt=""/>
                        </div>
                        <div>
                            <span>大战神</span>
                            <span>6000人在玩</span>
                            <span>开始游戏</span>
                        </div>
                    </div>
                    <div class="section_newGame_one_down_jdu">
                        <div>
                            <img src="/Public/image/jindu.png" style="width: 59px; height: 59px" alt=""/>
                        </div>
                        <div>
                            剩余30%
                        </div>
                    </div>
                </div>
                <div class="section_stand_alone_rel">
                    <a href="#" class="package_left">大战神新手卡</a>
                </div>
                <div class="section_stand_alone_pst">
                    <div class="section_newGame_one_down_size">
                        <div>
                            <img src="/Public/image/shendao.jpg" style="width:80px;height: 80px; border-radius: 10px;" alt=""/>
                        </div>
                        <div>
                            <span>大战神</span>
                            <span>6000人在玩</span>
                            <span>开始游戏</span>
                        </div>
                    </div>
                    <div class="section_newGame_one_down_jdu">
                        <div>
                            <img src="/Public/image/jindu.png" style="width: 59px; height: 59px" alt=""/>
                        </div>
                        <div>
                            剩余30%
                        </div>
                    </div>
                </div>
            </div>
        </fieldset>
    </div>
    <div id="section_point">
        <fieldset id="section_point_all">
            <legend>试玩赚积分</legend>
            <div id="section_point_all_top">
                <span>试玩赚积分</span>
                <span>more»</span>
            </div>
            <div id="section_point_all_down">
                <div class="section_point_all_down_content">
                    <div class="section_point_cope">
                        <div class="section_point_cope_rel">
                            <img src="/Public/image/jifen.jpg" alt=""/>
                            <div class="section_point_cope_pst">
                               <span>参与人数:560人</span>
                                <a href="#"><span>立即试玩</span></a>
                            </div>
                        </div>
                        <div class="d1">
                            <span>大战神1区</span>
                            <span>奖17675积分</span>
                        </div>

                    </div>
                    <div class="section_point_cope">
                        <div class="section_point_cope_rel">
                            <img src="/Public/image/jifen.jpg" alt=""/>
                            <div class="section_point_cope_pst">
                                <span>参与人数:560人</span>
                                <a href="#"><span>立即试玩</span></a>
                            </div>
                        </div>
                        <div class="d1">
                            <span>大战神1区</span>
                            <span>奖17675积分</span>
                        </div>

                    </div>
                    <div class="section_point_cope">
                        <div class="section_point_cope_rel">
                            <img src="/Public/image/jifen.jpg" alt=""/>
                            <div class="section_point_cope_pst">
                                <span>参与人数:560人</span>
                                <a href="#"><span>立即试玩</span></a>
                            </div>
                        </div>
                        <div class="d1">
                            <span>大战神1区</span>
                            <span>奖17675积分</span>
                        </div>

                    </div>
                    <div class="section_point_cope">
                        <div class="section_point_cope_rel">
                            <img src="/Public/image/jifen.jpg" alt=""/>
                            <div class="section_point_cope_pst">
                                <span>参与人数:560人</span>
                                <a href="#"><span>立即试玩</span></a>
                            </div>
                        </div>
                        <div class="d1">
                            <span>大战神1区</span>
                            <span>奖17675积分</span>
                        </div>

                    </div>
                </div>
                <div class="section_point_all_down_dct">
                    <img src="/Public/image/jiantuo1.png" alt=""/>
                    <img src="/Public/image/jiantuo3.png" alt=""/>
                </div>
            </div>
        </fieldset>
    </div>
    <div id="section_link">
        <fieldset id="section_link_all">
             <legend>友情链接</legend>
            <ul>
                <li><a href="">752g飞扬天下</a></li>
                <li><a href="">752g飞扬天下</a></li>
                <li><a href="">752g飞扬天下</a></li>
                <li><a href="">752g飞扬天下</a></li>
                <li><a href="">752g飞扬天下</a></li>
                <li><a href="">752g飞扬天下</a></li>
                <li><a href="">752g飞扬天下</a></li>
                <li><a href="">752g飞扬天下</a></li>
                <li><a href="">752g飞扬天下</a></li>
                <li><a href="">752g飞扬天下</a></li>
                <li><a href="">752g飞扬天下</a></li>
                <li><a href="">752g飞扬天下</a></li>
            </ul>
        </fieldset>
    </div>
</section>
<div id="nav_nar">
</div>

<div id="login_second">
    <div id="login_second_all">
        <div id="login_second_content">
            <div>
                <span>登录飞扬天下网</span>
                <span id="close_login">×</span>
            </div>
            <div class="login_pad" id="login_pad">
                <div class="login_two">账号 &nbsp; <input type="text" id="name_text" placeholder="用户名/手机号"/></div>
                <div class="login_two">密码 &nbsp; <input type="password" id="name_pass" placeholder="密码"/></div>
                <div class="login_three">
                    <input type="checkbox" value="1"/>下次自动登录
                    <a href="#">忘记密码</a>
                </div>
                <div class="login_four" id="login_enter">
                    <button>登录</button>
                </div>
                <div class="login_five">
                    <ul>
                        <li><a href="#">QQ<img src="/Public/image/QQ.png" style="width: 20px;height: 20px;" alt=""/></a></li>
                        <li><a href="#">微信<img src="/Public/image/weixin.png" style="width: 20px;height: 20px;" alt=""/></a></li>
                        <li><a href="#">微博<img src="/Public/image/weibo.png" style="width: 20px;height: 20px;" alt=""/></a></li>
                    </ul>
                    <a class="login_register" href="{：U('user/register')}">注册账号</a>
                </div>
            </div>
        </div>
    </div>
</div>

<footer id="footer">
    <div id="footer_detail">
        <ul>
            <li><a href="" style="color: #868585;">游戏大厅</a></li>
            <li>|</li>
            <li><a href="">商务合作</a></li>
            <li>|</li>
            <li><a href="">推广联盟</a></li>
            <li>|</li>
            <li><a href="">飞扬招聘</a></li>
            <li>|</li>
            <li><a href="">联系我们</a></li>
            <li>|</li>
            <li><a href="">公司简介</a></li>
        </ul>
        <div>
            <span>Copyright ©2016 752Gwww.752g.com京ICP证120137号京公网安备11010702001414号京网文【2014】2008-258号</span>
            <span>北京飞扬天下网络科技股份有限公司(证券代码：831302)京ICP备11049124-2号</span>
            <span>抵制不良网页游戏，拒绝盗版游戏。 注意自我保护，谨防受骗上当。 适度游戏益脑，沉迷游戏伤身。 合理安排时间，享受健康生活。</span>
        </div>
    </div>

</footer>

</body>
<script src="/Public/js/jquery.js"></script>
<script src="/Public/js/jquery.SuperSlide.2.1.1.js"></script>
<script src="/Public/js/index.js"></script>
<script>
</script>
</html>