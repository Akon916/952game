//收藏本站
function AddFavorite(sURL, sTitle){
    try {
        window.external.addFavorite(sURL, sTitle);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(sTitle, sURL, "");
        }
        catch (e) {
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}
//设为首页 <a onclick="SetHome(this,window.location)">设为首页</a>
function SetHome(obj,vrl){
    try{
        obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);
    }
    catch(e){
        if(window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            }
            catch (e) {
                alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
            }
            var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
            prefs.setCharPref('browser.startup.homepage',vrl);
        }
    }
}
//添加桌面
function toDesktop(sUrl,sName){
    try {
        var WshShell = new ActiveXObject("WScript.Shell");
        var oUrlLink =          WshShell.CreateShortcut(WshShell.SpecialFolders("Desktop")     + "\\" + sName + ".url");
        oUrlLink.TargetPath = sUrl;
        oUrlLink.Save();
    }
    catch(e)  {
        alert("当前浏览器不允许此操作，请手动添加");
    }
}
//点击弹出登录模态框
$("#login_all").click(function(){
    $("#login_second").css('display','block');
});
$('#close_login').click(function(){
    $("#login_second").css('display','none');
});

//顶部弹出登录界面
var ident='_identify';
var GC=decodeURI(getCookie(ident));//先获取cookie
checkLogin(GC,ident); //判断cookie用户名是否存在
$(function(){
    var inp1=false,inp2=false;
    // 验证用户名
    $('#name_text').focus(function(){
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
    $('#name_pass').focus(function(){
        $(this).prev().html('').css('color','#000000');
    }).blur(function(){
        if($(this).val().length >= 6 && $(this).val().length <=16 && $(this).val()!=''){
            if( $(this).val().match(/[^~></;\x22]+/)) {
                inp2=true;
            }
        }else{
            $('#name_text').prev().text('* 用户名密码输入有误').css('color','red');
            inp2=false;
        }
    });
    //提交按钮,所有验证通过方可提交

    $('#login_enter_two').click(function(){
        if(inp1 && inp2){
            var name_text_one=$('#name_text').val();
            var name_pass_one=$('#name_pass').val();
            $.ajax({                                        //登录判断用户名是否存在
                type:'POST',
                url:'test.php',
                async:true,
                dateType:'json',
                data:{login_name:name_text_one,login_pass:name_pass_one},
                success:function(res){
                    if(res=='true'){
                        var id=encodeURI($('#name_text').val());
                        if($('#w_name').attr('checked')=='checked'){//写入cookie
                            if(navigator.cookieEnabled==true){//验证cookie是否被禁用
                                setCookie_o(ident,id)
                            }else{
                                alert("对不起，您的浏览器的Cookie功能被禁用，请开启")
                            }
                        }else{
                            if(navigator.cookieEnabled==true){
                                setCookie_t(ident,id)
                            }else{
                                alert("对不起，您的浏览器的Cookie功能被禁用，请开启")
                            }
                        }
                        GC=decodeURI(getCookie(ident));
                        checkLogin(GC,ident);//获取cookie后执行的内容
                    }else{
                        $('#name_text').prev().text('* 登录失败').css('color','red');
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
    $("#login_second").css('display','none');//关闭登录模态框
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

//jquery-autocomplete 插件（自动补全）
$(function() {
    $('#search_btn').autocomplete("test2.php", {
        minChars: 2,//输入2个字符触发
        width: 200,
        height:250,
        max: 5,//限制输入的条目数量
        autoFill:true,//内容大于高度时产生滚动条
        delay:100,
        selectFirst:false,
        matchContains: "true",
        dataType: 'json',
        parse: function(data) {//请求回来的数据进行处理
            var rows = [];
            for(var i=0; i<data.length; i++){
                rows[rows.length] = {
                    data:data[i],            //下拉框显示数据格式
                    value:data[i].name,     //选定后实际数据格式
                    result:data[i].name //选定后输入框显示数据格式
                };
            }
            return rows;
        },
        formatItem: function (row, i, max) {
            return "<span style='width:40%' class='col-1'>" + row.name + "</span> " + "<span style='width:58%' class='col-2'>" + row.href + "</span>";//输出内容
        },
        formatMatch: function (row, i, max) {
            return row.name + row.name;
        },
        formatResult: function (row) {
            return row.name;
        }
    }).result(function (e, data, value) {/**加选中后的回调函数**/
        //console.log(value);选中触发的事件
    });
});
//按下enter键进行搜索
$(document).keydown(function (event) {
    if ( event.keyCode == 13 && $("#search_btn").val()!='') {
        var searEnter=replaceIllegalStr($("#search_btn").val());
        send_searVal(searEnter);
    }
});
//点击触发搜索
$("#search_pic").click(function () {
    if($("#search_btn").val()!=''){
        var searBtn=replaceIllegalStr($("#search_btn").val());
        send_searVal(searBtn);
    }
});
//搜索的ajax；
function send_searVal(searId){
    $.ajax({
        type:'POST',
        url:'test2.php',
        async:true,
        dateType:'json',
        data:{searName:searId},
        success:function(){
            alert("发送成功");
        },
        error:function(){
            alert("请求内容出错")
        }
    })
}
//搜索框的过滤
function replaceIllegalStr(str) {
    var reg;
    var illegal_list = ["/", "\\",
        "[", "]",
        "{", "}",
        "<", ">",
        "＜", "＞",
        "「", "」",
        "：", "；",
        "、", "•",
        "^", "'", "\"",
        "\r", "\r\n", "\\n", "\n"];
    for (var i = 0; i < illegal_list.length; i++) {
        if (str.indexOf(illegal_list[i]) >= 0) {
            if (illegal_list[i] == '\\' || illegal_list[i] == '[') {
                reg = new RegExp('\\' + illegal_list[i], "g");
            } else {
                reg = new RegExp(illegal_list[i], "g");
            }
            str = str.replace(reg, '');
        }
    }
    return str.trim();
}
//侧边导航栏控件gooey插件
$("#gooey-v").gooeymenu({
    bgColor: "#C0BEBF",
    contentColor: "white",
    style: "vertical",
    horizontal: {
        menuItemPosition: "glue"
    },
    vertical: {
        menuItemPosition: "spaced",
        direction: "up"
    },
    circle: {
        radius: 90
    },
    margin: "small",
    size: 60,
    bounce: true,
    bounceLength: "small",
    transitionStep: 100,
    hover: "#e56606"
});
//点击回到头部
$(".return_top").click(function(e){
    e.preventDefault();
    $('body,html').animate({scrollTop:0},500);
});


$(function(){
    var ua = navigator.userAgent;
    ua = ua.toLowerCase();
    var match = /(webkit)[ \/]([\w.]+)/.exec(ua) ||
        /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(ua) ||
        /(msie) ([\w.]+)/.exec(ua) ||
        !/compatible/.test(ua) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(ua) || [];

//如果需要获取浏览器版本号：match[2]

    switch(match[1]){
        case "msie": //ie
            if (parseInt(match[2]) === 6){ //ie6
               location.href="version.html";
            }
            else if (parseInt(match[2]) === 7) { //ie7
                location.href="version.html";
            }
            else if (parseInt(match[2]) === 8){ //ie8
            //$("#ieShow").css("display",'block')
            }
            else if(parseInt(match[2]) === 9){
            }
            break;
        case "webkit": //safari or chrome
            break;
        case "opera": //opera
            break;
        case "mozilla": //Firefox
            break;
        default:
    }
});

