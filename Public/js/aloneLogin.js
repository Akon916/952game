$(function(){
    var inp1=false,inp2=false;
    // 验证用户名
    $('#username').focus(function(){
        $(this).next().html('').css('color','#000000');
    }).blur(function(){
        if($(this).val().length >= 4 && $(this).val().length <=14 && $(this).val()!='' && $(this).val().match(/^[\u4E00-\u9FA5A-Za-z0-9_]+$/) )
        {
            if( $(this).val().match(/[^~></;\x22]+/)){
                 var uname=encodeURI( $(this).val());
                    $.ajax({
                        type:'POST',
                        url:'login',    //  home/user/login
                        async:true,
                        data:{login_name:uname},
                        success:function(res){
                            if( res == 'true' ){
                                $("#username").next().html('* 用户名输入正确').css('color','green');
                                 inp1=true;
                            }else{
                                $("#username").next().html('* 用户名不正确').css('color','green');
                            }
                        },
                        error:function(){
                            alert('内容请求出现问题！')
                        }
                    })
                //$(this).next().html('* 用户名输入正确').css('color','green');
               // inp1=true;
            }
        }else{
            $(this).next().text('* 用户名输入有误').css('color','red');
        }
    });
    //验证密码
    $('#password').focus(function(){
        $(this).next().html('').css('color','#000000');
    }).blur(function(){
        if($(this).val().length >= 6 && $(this).val().length <=16 && $(this).val()!=''){
            if( $(this).val().match(/[^~></;\x22]+/)) {
                //$(this).next().text('* 密码长度正确').css('color', 'green');
                 inp2 = true;
            }
        }else{
            $(this).next().text('密码应该为6-16位之间').css('color','red');
        }
    });
    //提交按钮,所有验证通过方可提交
    $('#submit').click(function(){
        if(inp1 && inp2){
            $('form').submit();
        }else{
            return false;
        }
    });
});


