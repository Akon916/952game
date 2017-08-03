<?php if (!defined('THINK_PATH')) exit();?>﻿<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>游戏列表</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="/Application/Admin/Public/css/adminStyle.css" rel="stylesheet" type="text/css" />
 <link rel="stylesheet" href="/Application/Admin/Public/css/iconfont.css"/>

 <style>
  #d1{
   width: 200px;
   height: 50px;
   margin:50px auto;
  }
 </style>
</head>
<body>
 <div class="wrap">
  <div class="page-title">
    <span class="modular fl"><i class="add"></i><em>编辑/添加游戏</em></span>
    <span class="modular fr"><a href="<?php echo U('game/index');?>" class="pt-link-btn">游戏列表</a></span>
  </div>
  <form action="<?php if($info[game_id]){echo U('game/editGame');}else{echo U('game/addGame'); } ?>" enctype="multipart/form-data" method="post">
  <table class="list-style">
   <tr>
    <td style="text-align:right;width:15%;">游戏名称：</td>
    <td><input type="text" class="textBox length-long" name="game_name" value="<?php echo ($info['game_name']); ?>"/></td>
   </tr>
   <tr>
    <td style="text-align:right;">游戏分类：</td>
    <td>
     <select class="textBox" name="game_type">
      <optgroup label="网游">
        <option <?php if($info['game_type']=='动作冒险'){echo 'selected=selected';} ?> >动作冒险</option>
        <option <?php if($info['game_type']=='角色扮演'){echo 'selected=selected';} ?> >角色扮演</option>
      </optgroup>
      <optgroup label="单机">
        <option <?php if($info['game_type']=='即时战略'){echo 'selected=selected';} ?> >即时战略</option>
      </optgroup>
     </select>
    </td>
   </tr>
   <!--<tr>
    <td style="text-align:right;">市场价：</td>
    <td>
     <input type="text" class="textBox length-short"/>
     <span>元</span>
    </td>
   </tr>
   <tr>
    <td style="text-align:right;">会员价：</td>
    <td>
     <input type="text" class="textBox length-short"/>
     <span>元</span>
    </td>
   </tr>
   <tr>
    <td style="text-align:right;">库存：</td>
    <td>
     <input type="text" class="textBox length-short"/>
     <span>盘</span>
    </td>
   </tr>-->
   <tr>
    <td style="text-align:right;">游戏网址：</td>
    <td><input type="text" class="textBox length-long" name="game_url" value="<?php echo ($info['game_url']); ?>"/></td>
   </tr>
   <tr>
    <td style="text-align:right;">游戏简述：</td>
    <td><input type="text" class="textBox length-long" name="game_description" value="<?php echo ($info['game_description']); ?>"/></td>
   </tr>
   <tr>
    <td style="text-align:right;">推荐等级：</td>
    <input type="hidden" name="game_recommend" id="game_recommend" value="<?php echo ($info['game_recommend']); ?>">
    <td id="d1">
     <span class="iconfont icon-xing mar"></span>
     <span class="iconfont icon-xing mar"></span>
     <span class="iconfont icon-xing mar"></span>
     <span class="iconfont icon-xing mar"></span>
     <span class="iconfont icon-xing mar"></span>
    </td>
   </tr>
   
   <tr>
    <td style="text-align:right;">游戏图标：</td>
    <td>
     <label for="suoluetu" class="labelBtnAdd">+</label>
     <img src="/Uploads/gameIcon/thumb/<?php echo ($info['game_thumbicon']); ?>" onerror="this.src='/Public/image/plus.png'" width=auto height="60" class="mlr5" id="pic" />
     <input type="file" id="suoluetu" class="hide" name="game_icon" value="<?php echo ($info['game_icon']); ?>"/>
     <input type="hidden" name="icon" value="<?php echo ($info['game_icon']); ?>">
    </td>
   </tr>
   
   <tr>
    <td style="text-align:right;">游戏主图：</td>
    <td>
     <!--<input type="file"  multiple="multiple" id="chanpinzhutu" class="hide" name="game_image[]"/>-->
     <label  class="labelBtn2">本地上传(最多选择3张)</label>
    </td>
   </tr>
   <tr>
    <td style="text-align:right;"></td>
    <td>
     <label for="image0"><img src="/Uploads/gameImages/thumb/<?php echo ($info['game_thumbimage'][0]); ?>" onerror="this.src='/Public/image/plus.png'" width=auto height="120" id="image01"/></label>
     <input type="file" multiple="multiple" id="image0" name="game_image[]" class="hide"/>
     <input type="hidden" name="images[]" value="<?php echo ($info['game_image'][0]); ?>"> <!--保存旧图路径-->

     <label for="image1"><img src="/Uploads/gameImages/thumb/<?php echo ($info['game_thumbimage'][1]); ?>" onerror="this.src='/Public/image/plus.png'" width=auto height="120" id="image02"/></label>
     <input type="file" multiple="multiple" id="image1" name="game_image[]" class="hide"/>
     <input type="hidden" name="images[]" value="<?php echo ($info['game_image'][1]); ?>">

     <label for="image2"><img src="/Uploads/gameImages/thumb/<?php echo ($info['game_thumbimage'][2]); ?>" onerror="this.src='/Public/image/plus.png'" width=auto height="120" id="image03"/></label>
     <input type="file" multiple="multiple" id="image2" name="game_image[]" class="hide"/>
     <input type="hidden" name="images[]" value="<?php echo ($info['game_image'][2]); ?>">
    </td>
   </tr>
   
   <tr>
    <td style="text-align:right;">游戏详情：</td>
    <td><textarea class="textarea" name="game_details"><?php echo ($info['game_details']); ?></textarea></td>
   </tr>
   <tr>
    <td style="text-align:right;"></td>
    <td>
     <input type="submit" value="<?php if($info[game_id]){echo '编辑完成';}else{echo '添加新游戏';} ?>" class="tdBtn"/>
    </td>
   </tr>
  </table>
     <input type="hidden" name="game_id" value="<?php echo ($info['game_id']); ?>">
  </form>
 </div>
</body>
<script src="/Application/Admin/Public/js/jquery-1.8.3.min.js"></script>
<script src="/Application/Admin/Public/js/xx.js"></script>
<script>

    $(function() {
        $("#pic").click(function () {
            $("#suoluetu").click(); //隐藏了input:file样式后，点击头像就可以本地上传
            $("#suoluetu").on("change",function(){
                var objUrl = getObjectURL(this.files[0]) ; //获取图片的路径，该路径不是图片在本地的路径
                if (objUrl) {
                    $("#pic").attr("src", objUrl) ; //将图片路径存入src中，显示出图片
                }
            });
        });

        $("#image01").click(function () {
            //$("#image1").click(); //隐藏了input:file样式后，点击头像就可以本地上传
            $("#image0").on("change",function(){
                var objUrl = getObjectURL(this.files[0]) ; //获取图片的路径，该路径不是图片在本地的路径
                if (objUrl) {
                    $("#image01").attr("src", objUrl) ; //将图片路径存入src中，显示出图片
                }
            });
        });
        $("#image02").click(function () {
            //$("#image2").click(); //隐藏了input:file样式后，点击头像就可以本地上传
            $("#image1").on("change",function(){
                var objUrl = getObjectURL(this.files[0]) ; //获取图片的路径，该路径不是图片在本地的路径
                if (objUrl) {
                    $("#image02").attr("src", objUrl) ; //将图片路径存入src中，显示出图片
                }
            });
        });
        $("#image03").click(function () {
            //$("#image3").click(); //隐藏了input:file样式后，点击头像就可以本地上传
            $("#image2").on("change",function(){
                var objUrl = getObjectURL(this.files[0]) ; //获取图片的路径，该路径不是图片在本地的路径
                if (objUrl) {
                    $("#image03").attr("src", objUrl) ; //将图片路径存入src中，显示出图片
                }
            });
        });
    });

    //建立一個可存取到該file的url
    function getObjectURL(file) {
        var url = null ;
        if (window.createObjectURL!=undefined) { // basic
            url = window.createObjectURL(file) ;
        } else if (window.URL!=undefined) { // mozilla(firefox)
            url = window.URL.createObjectURL(file) ;
        } else if (window.webkitURL!=undefined) { // webkit or chrome
            url = window.webkitURL.createObjectURL(file) ;
        }
        return url ;
    }


</script>
</html>