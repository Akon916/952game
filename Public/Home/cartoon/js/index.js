//图文切换
jQuery("#section_three_down").slide({
    mainCell:".picFocus_main ul",
    effect:"fade",
    autoPlay:false
});

//登录
$('#entry_lg').click(function(){
   $("#login_modal").css('display','block')
});
$('#login_cls').click(function(){
    $("#login_modal").css('display','none')
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
    if(sct>=0&&sct<440){
        $(".side_line:eq(0)")
            .addClass('side_line_color')
            .siblings()
            .removeClass('side_line_color')
    }
    if(sct>=440&&sct<1110){
        $(".side_line:eq(1)")
            .addClass('side_line_color')
            .siblings()
            .removeClass('side_line_color')
    }
    if(sct>=1110&&sct<1600){
        $(".side_line:eq(2)")
            .addClass('side_line_color')
            .siblings()
            .removeClass('side_line_color')
    }
    if(sct>=1600&&sct<2400){
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
    var arr=[0,440,1110,1600,2400];
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



