
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


//评论
$("#comment_top_right>textarea").click(function(){
    //用样式是否变化来判断是否登录
    if($("#person_center_pst").css("display")=="none"){
        alert("请您先进行登录操作！"); return
    }
});
//规定字数的的评论输入框
var textComment=document.getElementById("textComment");
var surplus=document.getElementById("surplus");
var splNoctive=document.getElementById("splNoctive");
textComment.oninput=function(){
    var textNum=textComment.value.length;
    if(textNum>=500){
        var surNum=textNum-500;
        splNoctive.innerHTML="您已超过规定字数"+surNum+"个";
        splNoctive.style.color="#e4393c";
        //发起ajax请求
        
    }else{
        splNoctive.innerHTML=textNum+"/ 500";
         splNoctive.style.color="#888888"
    }
}
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

