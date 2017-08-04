//图文切换
$(document).ready(function(){
    $('#footer').load('../data/footer.html')
});
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
//侧面标签页切换
jQuery("#section_two_right_down").slide({
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
$('#section_one_move').on('mouseover','li',function(){
    var first_line=$("#section_one_move>li:eq(0)");
        first_line.children('div').removeClass('add_b_line');
        $(this).css('borderBottom',' 5px solid #e56606').siblings().css('borderBottom',' 5px solid transparent');
        //$('.show_icon:eq(indexLength)').css('display','block');
        $(this).children('div').addClass('show_icon').parents().siblings().children('div').removeClass('show_icon');
});
$("#section_one_move>li").on("mouseover", function () {
    var index = $(this).index();
    var divs = $("#section_one_middle_main>div");
    divs.hide();
    divs.eq(index).show(200);
});


