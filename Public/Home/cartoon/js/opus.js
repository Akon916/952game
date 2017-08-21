//给#section_all添加高度
//$(document).(function(){
//var section_h=$(document).height()-$("#main").height()-$("#header").height();
//$("#section_all").css("height",section_h+"px");
//});
//点击查看更多内容的弹缩效果
var show_time=0;
$("#section_left_one_d").click(function(){
   $("#section_left_one_m").toggleClass("section_left_one_m");
    if(show_time==0){
        $(this).children("span").html("点击收起目录  ∧");
        show_time=1;
      //  $("#section_all").css("height",$(document).height()-$("#main").height()-$("#header").height()+"px");//点击后section_all高度变化，重新给它添加高度
    }else if(show_time==1){
        $(this).children("span").html("点击查看更多 ∨");
        show_time=0;
          //  $("#section_all").css("height",section_h+"px");//section_all回到原始的高度
    }
});
//给作者送礼物的人物滑动播放
jQuery(".txtMarquee-left").slide({mainCell:".slide_bd ul",autoPlay:true,effect:"leftMarquee",vis:2,interTime:10});
//漫画集数，正序或是倒序
var bigContainer = document.querySelectorAll(".section_left_one_m>.opus_idNum");
var x_num=0;
$("#btn_x").click(function(){
    if(x_num==0){
        for(var i=bigContainer.length-1;i>-1;i--){
            document.querySelector("#section_left_one_m").appendChild(bigContainer[i]);
        }
        x_num=1;
        $(this).html("正序");
    }else if(x_num==1){
        for(var i=0;i<bigContainer.length;i++){
            document.querySelector("#section_left_one_m").appendChild(bigContainer[i]);
        }
        x_num=0;
        $(this).html("倒序");
    }
});

//右侧排行榜鼠标触动效果+点击切换粉丝榜的效果
$("#section_right_two_t").on("mouseenter","h3",function(){
    var show_b=$(".section_right_two_d");
    var index=$(this).index();
    show_b.hide();
    if(index==0){
        show_b.eq(index).show();
        $(this).css("color","#e4393c").siblings().css("color","#222")
    }else{
        show_b.eq(1).show();
        $(this).css("color","#e4393c").siblings().css("color","#222")
    }
});
$(".section_right_two_d").on("mouseenter",".works_list",function(){
    var divs=$(".section_right_two_d>.dt_list");
    divs.hide();
    $(".section_right_two_d>.works_list").fadeIn();
    $(this).hide();
    $(this).next().fadeIn();
});
$("#section_right_four_d").on("mouseenter",".works_list",function(){
    var divs=$("#section_right_four_d>.dt_list");
    divs.hide();
    $("#section_right_four_d>.works_list").fadeIn();
    $(this).hide();
    $(this).next().fadeIn();
});
//给作者送礼物
$("#section_left_two_m>ul>li").click(function(){
    var num_send=$("#section_left_two_m>ul>li>i");
    num_send.hide();
    $(this).find("i").show()
});
//点击送礼物。判断是否登录
var p_min_val=$("#section_left_two_m>ul>li>p>span").html();
if($("#section_left_two_t>span>span").html()<p_min_val){
    $("#section_left_two_d>span").html("金币不足 点我兑换")
}else{
    $("#section_left_two_d>span").html("立即送礼物")
}
$("#section_left_two_d").click(function(){
    //用样式是否变化来判断是否登录
   if($("#person_center_pst").css("display")=="none"){
       alert("请您先进行登录操作！")
   }else if($("#person_center_pst").css("display")=="block"){
       alert("送礼物成功")
   }
});

//评论
$("#comment_top_right>textarea").click(function(){
    //用样式是否变化来判断是否登录
    if($("#person_center_pst").css("display")=="none"){
        alert("请您先进行登录操作！"); return
    }
});
//发表回复时弹出框
var reply_p=0;
$(".reply_ipt").click(function(){
    if(reply_p==1){
    $(this).parent().parent().next().hide();
    reply_p=0;return
   }
    else if(reply_p==0){
        $(this).parent().parent().next().fadeIn();
        reply_p=1;return
    }
});
//表情框点击内容自由切换
var reply_p=0;
$(".font_code").parent().click(function(){
    if(reply_p==0){
        $(".font_code").hide();
        $(this).children().fadeIn();
        $(".image_code").hide();
        reply_p=1;
        image_c=0;
    }else if( reply_p==1){
        $(this).children().hide();
        reply_p=0;
    }
});
var image_c=0;
$(".image_code").parent().click(function(){
    if(image_c==0){
        $(".image_code").hide();
        $(this).children().fadeIn();
        $(".font_code").hide();
        image_c=1;
        reply_p=0;
    }else if(image_c==1){
        $(this).children().hide();
        image_c=0;
    }
});
//在回复框里面回复内容的弹出框
var reply_r_ipt=0;
$(".reply_r_ipt").click(function(){
    if(reply_r_ipt==1){
        $(this).parent().parent().next().hide();
        $(".reply_r_c").hide();
        reply_r_ipt=0;return
    }
    else if(reply_r_ipt==0){
        $(this).parent().parent().next().fadeIn();
        reply_r_ipt=1;return
    }
});
//点赞的样式
var dz=0;
$(".icon_dz").click(function(){
    var val=$(this).prev().html();
    var dz_val=Number($(this).prev().html());

    if(dz==0){
        if(val=="赞"){
            $(this).prev().html("1");
            $(this).css("color","#e08833");
            dz=1;
        }else{
            console.log(dz_val+1);
            $(this).prev().html(dz_val+1);
            $(this).css("color","#e08833");
            dz=1;
        }
    }else if(dz==1){
        if(dz_val=="1"){
            $(this).prev().html("赞");
            $(this).css("color","#222");
            dz=0;
        }else{
            $(this).prev().html(dz_val-1);
            $(this).css("color","#222");
            dz=0;
        }
    }
});
//返回顶部
$(document).scroll(function(){
    var sct=$(window).scrollTop();
    if(sct>=500){
        $("#re_top").css("display","block")
    }else{
        $("#re_top").css("display","none")
    }
});
$('#re_top>img').on('click',function(){
    $('body,html').animate({scrollTop:0},300);
});

//分页
$("#section_left_four_page").pagination({
    count: 100, //总数
    size: 10, //每页数量
    index: 1,//当前页
    lrCount: 3,//当前页左右最多显示的数量
    lCount: 1,//最开始预留的数量
    rCount: 1,//最后预留的数量
    callback: function (options) {
        alert(options.index);
        //options.count = 300;
        //return options;
    },
    beforeRender: function (jA) {
        //jA.attr("href","default.php?index="+jA.text());
    }
});

//$(document).click(function(){
//    $("#section_all").css("height",$(document).height()-$("#main").height()-$("#header").height()+"px")
//});

//吐槽轮播
jQuery(".txtMarquee-top").slide({mainCell:".bd ul",autoPlay:true,effect:"topMarquee",vis:3,interTime:25,trigger:"click"});

