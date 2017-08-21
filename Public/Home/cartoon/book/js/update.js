$(function(){
    var inp1=false,inp2=false,inp3=false;
    // 验证qq
    $('#qq').blur(function(){
        if($(this).val().length >= 5 && $(this).val().length <=18)
        {
            $(this).next().text('');
            inp1=true;
        }else{
            $(this).next().text('* QQ格式输入有误').css('color','red');
        }
    });
    //验证手机号
    $('#tel_phone').blur(function(){
        if($(this).val().length == 11 && /^1[3|4|5|8][0-9]\d{4,8}$/.test($(this).val())){
            $(this).next().text('');
            inp2=true;
        }else{
            $(this).next().text('* 手机号格式输入有误').css('color','red');
        }
    });
    //提交按钮,所有验证通过方可提交
    $('#submit').click(function(){
        if(inp1 && inp2 ){
            $('form').submit();
        }else{
            return false;
        }
    });
});
