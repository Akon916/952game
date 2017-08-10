
$(document).ready(function(){
    $("#footer").load("../data/footer.html")
});

$(function(){
    var inp1=false,inp2=false,inp3=false,inp4=false,inp5=false,inp6=false,inp7=false,inp8=false;
    // 验证用户名
    $('#username').focus(function(){
        $(this).parent().next().html('4到14个字符（数字、字母、下划线）').css('color','#000000');
    }).blur(function(){
        if($(this).val().length >= 4 && $(this).val().length <=14 && $(this).val()!=''
            && $(this).val().match(/^[\u4E00-\u9FA5A-Za-z0-9_]+$/)
            && $(this).val().match(/^[^\u4e00-\u9fa5]{0,}$/)
        )
       {
            if( $(this).val().match(/[^~></;\x22]+/)){
                $(this).parent().next().html('* 输入成功').css('color','green');
                inp1=true;
            }
        }else{
            $(this).parent().next().text('* 用户名应该为4-14位之间').css('color','red');
        }
    });
    //验证密码
    $('#password').focus(function(){
        $(this).parent().next().text('请输入密码（6-16个字符，区分大小写').css('color','#000000');
    }).blur(function(){
        if($(this).val().length >= 6 && $(this).val().length <=16 && $(this).val()!=''){
            if( $(this).val().match(/[^~></;\x22]+/)) {
                $(this).parent().next().text('* 输入成功').css('color', 'green');
                inp2 = true;
            }
        }else{
            $(this).parent().next().text('密码应该为6-16位之间').css('color','red');
        }
    });

    //验证确认密码
    $('#repass').focus(function(){
        $(this).parent().next().text('输入的确认密码要和上面的密码一致').css('color','#000000');
    }).blur(function(){
        if($(this).val().length >= 6 && $(this).val().length <=16 && $(this).val()!='' && $(this).val() == $('input[name="password"]').val()){
            if( $(this).val().match(/[^~></;\x22]+/)) {
                $(this).parent().next().text('* 输入成功').css('color', 'green');
                inp3 = true;
            }
        }else{
            $(this).parent().next().text('* 输入的确认密码要和上面的密码一致').css('color','red');
        }
    });

    //验证邮箱
    $('#email').focus(function(){
        $(this).parent().next().text('请输入正确的邮箱格式').css('color','#000000');
    }).blur(function(){
        if($(this).val().search(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/)==-1){

            $(this).parent().next().text('* 请输入正确的邮箱格式').css('color','red');
        }else if( $(this).val().match(/[^~></;\x22]+/)){
            $(this).parent().next().text('* 输入成功').css('color','green');
            inp4=true;
        }
    });
    //验证手机
    $('#phone').focus(function(){
        $(this).parent().next().text('请输入正确的手机号码').css('color','#000000');
    }).blur(function(){
        if(!$(this).val().match(/^(((13[0-9]{1})|159|153)+\d{8})$/)){
            $(this).parent().next().text('* 请输入正确的号码格式').css('color','red');
        }else if( $(this).val().match(/[^~></;\x22]+/)) {
            $(this).parent().next().text('* 输入成功').css('color','green');
            inp5=true;
        }
    });

    //验证真实中文名称
    $('#tureName').focus(function(){
        $(this).parent().next().text('请输入你的真实姓名  (如：李四)').css('color','#000000');
    }).blur(function(){
        if(!$(this).val().match(/^[\u4E00-\u9FA5]{1,6}$/)){
            $(this).parent().next().text('* 请输入你的真实姓名').css('color','red');
        }else if( $(this).val().match(/[^~></;\x22]+/)) {
            $(this).parent().next().text('* 输入成功').css('color','green');
            inp6=true;
        }
    });
    //验证身份证号码
    $('#card').focus(function(){
        $(this).parent().next().text('请输入正确的身份证号码  (如：210303198412082729)').css('color','#000000');
    }).blur(function(){
        if(!$(this).val().match(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/)){
            $(this).parent().next().text('* 请输入正确的身份证号码').css('color','red');
        }else if( $(this).val().match(/[^~></;\x22]+/)) {
            $(this).parent().next().text('* 输入成功').css('color','green');
            inp7=true;
        }
    });

    //勾选阅读内容
    $('#agree').click(function(){
        if($(this).is(':checked')){
            inp8=true;
        }else{
            inp8=false;
        }
    });
    //提交按钮,所有验证通过方可提交
    $('#submit').click(function(){
        if(inp1 && inp2 && inp3 && inp4 && inp5 && inp6 && inp7 &&inp8){
            $('form').submit();
        }else{
            return false;
        }
    });
});