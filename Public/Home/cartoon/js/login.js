
$(function(){
    var inp1=false,inp2=false;
    // 验证用户名
    $('#username').blur(function(){
        if($(this).val().length >= 4 && $(this).val().length <=14 && $(this).val()!='' && $(this).val().match(/^[\u4E00-\u9FA5A-Za-z0-9_]+$/) )
        {
            if( $(this).val().match(/[^~></;\x22]+/)){
                var uname=encodeURI( $(this).val());
                //trueName(uname);
                inp1=true;
            }
        }else{
            $(this).next().text('* 用户名输入有误').css('color','red');
        }
    });
    //验证密码
    $('#password').blur(function(){
        if($(this).val().length >= 6 && $(this).val().length <=16 && $(this).val()!=''){
            if( $(this).val().match(/[^~></;\x22]+/)) {
                inp2=true;
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
function trueName(uname){
    $.ajax({
        type:'POST',
        url:'1.php',
        async:true,
        dateType:'json',
        data:{login_name:uname},
        success:function(res){
            console.log(res);
            //if(res==true){
            //    $("#username").next().html('* 用户名输入正确').css('color','green');
            //    return inp1 = true;
            //}else{
            //    $("#username").next().html('* 用户名不正确').css('color','green');
            //}
            return inp1 = true;
        },
        error:function(){
            alert('内容请求出现问题！')
        }
    })
}