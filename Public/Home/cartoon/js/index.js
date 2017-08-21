//图文切换
jQuery("#section_three_down").slide({
    mainCell:".picFocus_main ul",
    effect:"fade",
    autoPlay:false
});

//侧边导航
$(document).scroll(function(){
    var scroll =$(window).scrollTop();
    if(scroll>=300){
        $('#side').css("display","block")
    }
    else{
        $('#side').css("display","none")
    }
});
$(".side_line:eq(5)").click(function(){
    $('body,html').animate({scrollTop:0},500);
});
$(document).scroll(function(){
    var sct=$(window).scrollTop();
    if(sct>=0&&sct<540){
        $(".side_line:eq(0)")
            .addClass('side_line_color')
            .siblings()
            .removeClass('side_line_color')
    }
    if(sct>=540&&sct<1210){
        $(".side_line:eq(1)")
            .addClass('side_line_color')
            .siblings()
            .removeClass('side_line_color')
    }
    if(sct>=1210&&sct<1700){
        $(".side_line:eq(2)")
            .addClass('side_line_color')
            .siblings()
            .removeClass('side_line_color')
    }
    if(sct>=1700&&sct<2400){
        $(".side_line:eq(3)")
            .addClass('side_line_color')
            .siblings()
            .removeClass('side_line_color')
    }
    if(sct>=2400){
        $(".side_line:eq(4)")
            .addClass('side_line_color')
            .siblings()
            .removeClass('side_line_color')
    }
});
$('#side_line').on('click','li',function(){
    var arr=[0,540,1210,1700,2400];
        var i=$(this).index();
    $('body,html').animate({scrollTop:arr[i]},300);
});

//第一部分轮播
jQuery(".section_one_middle_carousel").slide({
    mainCell:".bd ul",
    effect:"left",
    autoPlay:true
});
//第二部分轮播
jQuery(".section_two_left_down").slide({
    mainCell:".bd ul",
    effect:"left",
    autoPlay:false
});
//本月排名弹出子内容
jQuery(".section_two_right_down").slide({
    titCell:$('.section_rkt_up'), //鼠标触发对象
    targetCell:$('.section_rkt_dw'), //与titCell一一对应，第n个titCell控制第n个targetCell的显示隐藏
    effect:"slideDown", //targetCell下拉效果
    delayTime:150 , //效果时间
    triggerTime:0, //鼠标延迟触发时间（默认150）
    defaultPlay:true,//默认是否执行效果（默认true）
    returnDefault:true ,
    defaultIndex:0//鼠标从.sideMen移走后返回默认状态（默认false）
});

//漫画推荐标签页切换
$("#section_one_move>li").on("mouseover", function (){
    $(this).children("span").addClass("one_nav_tar_pst").parent().siblings().children("span").removeClass("one_nav_tar_pst");
    var index = $(this).index();
    var divs = $("#section_one_middle_main>div");
    divs.hide();
    divs.eq(index).show(200);
});
//热门漫画旁边的滚动信息条
jQuery(".txtMarquee-left").slide({mainCell:".slide_bd ul",autoPlay:true,effect:"leftMarquee",vis:2,interTime:50});
//热门漫画右侧标签页切换
$("#section_two_right_top>div").on("click","span",function(){
    var index = $(this).index();
    $(this).css("color","#e56606").siblings().css("color","#333");
    var divs = $(".section_two_right_down");
    divs.hide();
    divs.eq(index).show();
});

//资讯内容切换
$("#section_four_dw_left_m>ul").on("mouseover","li",function(){
    $(this).addClass("list_style_m").siblings().removeClass("list_style_m");
    var index = $(this).index();
    var divs = $(".section_four_dw_left_d");
    divs.hide();
    divs.eq(index).show();
});

//底层弹出漫画效果
$('#cartoon_close').click(function(){
  $("#cartoon_bottom").animate({height:"0px",opacity:"0"},500)
    setCookie(num_toggle,close_cartoon)
});
//用cookie判断是否关闭过底层漫画页面，重新打开浏览器弹出，刷新不弹出
var num_toggle='cartoon_toggle';
var close_cartoon="close";
var GC=getCookie(num_toggle);//先获取cookie
checkLogin(GC,num_toggle); //判断cookie用户名是否存在
//写入cookie
function setCookie(num_toggle,close_cartoon) {
    var exp = new Date();
    exp.setTime(exp.getTime());// + Days*24*60*60*1000
    document.cookie = num_toggle + "="+  close_cartoon ;//+ ";expires=" + exp.toGMTString();//
}
/* 获取指定cookie */
function getCookie(num_toggle){
    var strCookie = document.cookie;
    var arrCookie = strCookie.split(";");
    for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split("=");
        if (arr[0] == num_toggle)
            return arr[1];
    }
    return "";
}
/* 读取cookie识别登录状态 */
function checkLogin(num_toggle) {
    if (GC ==close_cartoon) {
        $("#cartoon_bottom").css("display","none")
    }else{
        return false
    }
}


