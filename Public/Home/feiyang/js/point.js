
//新闻自动滚动
    jQuery("#main_draw_down").slide({
        mainCell:".main_draw_down_txt ul",
        autoPlay:true,
        effect:"topMarquee",
        vis:10,
        interTime:50
    });

//礼包领取tab切换
    jQuery("#main_three_down_slide").slide({
        titCell:$(".main_slide_rel"), //鼠标触发对象
        targetCell:$(".main_slide_pst"), //与titCell一一对应，第n个titCell控制第n个targetCell的显示隐藏
        effect:"slideDown", //targetCell下拉效果
        delayTime:200 , //效果时间
        triggerTime:0, //鼠标延迟触发时间（默认150）
        defaultPlay:true,//默认是否执行效果（默认true）
        returnDefault:true ,
        defaultIndex:0//鼠标从.sideMen移走后返回默认状态（默认false）
    });

//左侧登录界面
var ident='_identify';
var GC=decodeURI(getCookie(ident));//先获取cookie
checkLogin(GC,ident); //判断cookie用户名是否存在
$(function(){
    var inp1=false,inp2=false;
    // 验证用户名
    $('#name_text_one').focus(function(){
        $(this).prev().html('').css('color','#000000');
    }).blur(function(){
        if($(this).val().length >= 4 && $(this).val().length <=14 && $(this).val()!='' && $(this).val().match(/^[\u4E00-\u9FA5A-Za-z0-9_]+$/) )
        {
            if( $(this).val().match(/[^~></;\x22]+/)){
                var uname=encodeURI( $(this).val());
                inp1=true;
            }
        }else{
            $('#notice_one').text('* 用户名输入有误').css('color','red');
            inp1=false;
        }
    });
    //验证密码
    $('#name_pass_one').focus(function(){
        $(this).prev().html('').css('color','#000000');
    }).blur(function(){
        if($(this).val().length >= 6 && $(this).val().length <=16 && $(this).val()!=''){
            if( $(this).val().match(/[^~></;\x22]+/)) {
                inp2=true;
            }
        }else{
            $('#notice_one').text('* 用户名密码输入有误').css('color','red');
            inp2=false;
        }
    });
    //提交按钮,所有验证通过方可提交

    $('#login_enter_one').click(function(){
        if(inp1 && inp2){
            var name_text_one=$('#name_text_one').val();
            var name_pass_one=$('#name_pass_one').val();
            $.ajax({                                        //登录判断用户名是否存在
                type:'POST',
                url:'test.php',
                async:true,
                dateType:'json',
                data:{login_name:name_text_one,login_pass:name_pass_one},
                success:function(res){
                    if(res=='true'){
                        var id=encodeURI($('#name_text_one').val());
                        if($('#re_name').attr('checked')=='checked'){//写入cookie 判断是否勾选自动保存
                            if(navigator.cookieEnabled==true) {//判断cookie是否被禁用
                                setCookie_o(ident, id)
                            }else{
                                alert("对不起，您的浏览器的Cookie功能被禁用，请开启")
                            }
                        }else{
                            if(navigator.cookieEnabled==true) {
                                setCookie_t(ident, id)
                            }else{
                                alert("对不起，您的浏览器的Cookie功能被禁用，请开启")
                            }
                        }
                        GC=decodeURI(getCookie(ident));
                        checkLogin(GC,ident);//获取cookie后执行的内容
                    }else{
                        $('#notice_one').text('* 登录失败').css('color','red');
                    }
                },
                error:function(){
                    alert('内容请求出现问题！')
                }
            })
        }else{
            return false;
        }
    });
});
//写入cookie
function setCookie_o(ident,id) {
    var Days = 7;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*10*1000);//设置保存时间7天
    document.cookie = ident + "="+ id + ";expires=" + exp.toGMTString();
}
function setCookie_t(ident,id) {
    //var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime());// + Days*24*60*60*1000
    document.cookie = ident + "="+  id ;//+ ";expires=" + exp.toGMTString();//
}
/* 获取指定cookie */
function getCookie(ident){
    var strCookie = document.cookie;
    var arrCookie = strCookie.split(";");
    for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split("=");
        if (arr[0] == ident)
            return arr[1];
    }
    return "";
}
/* 读取cookie识别登录状态 */
function checkLogin(GC,ident) {
    if (getCookie(ident) != "") {
        nameShow(GC);
    }else{
        return false
    }
}
function nameShow(GC){
    $(".login").css("display","none");
    $("#person_frame").css("display",'block');
    $("#person_frame_login").html(GC);
    $("#login_all").css("display","none");
    $("#login_name").html("欢迎回来: "+GC);
    $("#sign_out").css("display",'block')
}

//判断是否登录之后能点击领取（已领取的地方变暗）//(任务赚积分)
$("#login_enter_two").click(function(){
    setTimeout(function(){
        readyPoint();
    },100);
});
$("#login_enter_one").click(function(){
    setTimeout(function(){
        readyPoint();
    },100);
});
function readyPoint(){
if(GC!=""){
    if($(".one_down_style>a").html()=="已完成") {
        var arr = $(".one_down_style>a");
        $.each(arr, function (i, val) {
            if (arr[i].innerHTML == "已完成") {
                arr[i].style.background = "#888888";
            }
        })
    }}
}readyPoint();
//验证是否登录（登录成功）跳转到相应的页面
$(".one_down_style").on("click","a",function(){
    if(GC==""){
       alert("请您先进行登录操作！")
    }else if(GC!==""){
     var point_url= $(this).attr("href");
        location.href=point_url;
    }
});


