//玩过的游戏，鼠标放在上面点亮整行
$(".avo_line").on("mouseover",'a',function(){
    var spans=$(".avo_line>a").children("span");
    spans.removeClass("avo_lineCol");
    $(this).children("span").addClass("avo_lineCol");
});
//领取礼包，手风琴
$("#section_stand_alone_two_down").slide({
    titCell:$(".section_stand_alone_rel"), //鼠标触发对象
    targetCell:$(".section_stand_alone_pst"), //与titCell一一对应，第n个titCell控制第n个targetCell的显示隐藏
    effect:"slideDown", //targetCell下拉效果
    delayTime:300 , //效果时间
    triggerTime:0, //鼠标延迟触发时间（默认150）
    defaultPlay:true,//默认是否执行效果（默认true）
    returnDefault:true
});

//banner轮播
jQuery(".slideBox").slide({
    mainCell:".bd ul",
    autoPlay:true,
    mouseOverStop:false
});
 var num=1;
$("#section_boutique_switch").click(function(){
  var hiden= $("#section_boutique_part_one");
  var shown= $("#section_boutique_part_two");
    if(num==1){
        shown.css('display','block');
        hiden.css('display','none');
        shown.attr("class",'animated fadeInRight');
        $("#section_boutique_switch").html('《《 精彩推荐');
        num=-1;return
    }
    if(num==-1){
        shown.css('display','none');
        hiden.css('display','block');
        hiden.attr("class",'animated fadeInLeft');
        $("#section_boutique_switch").html('》》热门游戏');
        num=1;return
    }
});

//登录界面
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
            $(this).prev().text('* 用户名输入有误').css('color','red');
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
            $('#name_text_one').prev().text('* 用户名密码输入有误').css('color','red');
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
                        if($('#re_name').attr('checked')=='checked'){//写入cookie
                            if(navigator.cookieEnabled==true){//判断cookie是否被禁用
                            setCookie_o(ident,id)
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
                        $('#name_text_one').prev().text('* 登录失败').css('color','red');
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
//点击退出删除cookie
$(".sign_out").click(function(){
    delCookie(ident);
});
function delCookie(ident){//为了删除指定名称的cookie，可以将其过期时间设定为一个过去的时间
    var exp = new Date();
    exp.setTime(exp.getTime() + -1*24*60*60*1000);
    document.cookie = ident + "="+ getCookie(ident) + ";expires=" + exp.toGMTString();
    window.location.reload();
}

//精品推荐，好评星数
var html='';var starIndex=4;
function star(starIndex){
    switch (starIndex<=5){
        case starIndex==0:
            for(var i=0;i<5;i++){
                html+="<em class='praise_rel_t'></em>";
            }
            $(".praise_pst").append(html);
            break;
        case starIndex==1:
            html="<em class='praise_rel_o'></em>";
            for(var i=0;i<4;i++){
                html+="<em class='praise_rel_t'></em>";
            }
            $(".praise_pst").append(html);
            break;
        case starIndex==2:
            html="<em class='praise_rel_o'></em><em class='praise_rel_o'></em>";
            for(var i=0;i<3;i++){
                html+="<em class='praise_rel_t'></em>";
            }
            $(".praise_pst").append(html);
            break;
        case starIndex==3:
            html="<em class='praise_rel_o'></em><em class='praise_rel_o'></em><em class='praise_rel_o'></em>";
            for(var i=0;i<2;i++){
                html+="<em class='praise_rel_t'></em>";
            }
            $(".praise_pst").append(html);
            break;
        case starIndex==4:
            for(var i=0;i<4;i++){
                html+="<em class='praise_rel_o'></em>";
            }
            html+="<em class='praise_rel_t'></em>";
            $(".praise_pst").append(html);
            break;
        case starIndex==5:
            for(var i=0;i<5;i++){
                html+="<em class='praise_rel_o'></em>";
            }
            $(".praise_pst").append(html);
            break;
    }
}star(starIndex);

//试玩赚积分点击滑动
jQuery(".picScroll-left").slide({
    titCell:".hd ul",
    mainCell:".bd ul",
    autoPage:true,
    effect:"left",
    scroll:1,
    vis:6,
    trigger:"click"
});
