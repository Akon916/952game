
//页面上的登录验证
$(function(){
	var inp1=false,inp2=false,inp3=false;
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
            $('#name_text_one').prev().text('* 密码输入有误').css('color','red');
            inp2=false;
        }
    });
    //验证验证码
    $('#ecode').focus(function(){
        $(this).prev().html('').css('color','#000000');
    }).blur(function(){
        if($('#ecode').val()!==''){
           inp3=true;
        }else{
            $('#name_text_one').prev().text('* 验证码不能为空').css('color','red');
            inp3=false;
        }
    });
	if($('#ecode').val()==''){
		inp3=false;
	}else{
		inp3=true;
	}

    //提交(ajax)
    $("#login_enter_one").click(function(){
    	if(inp1==true && inp2==true && inp3==true){
    		//发起ajax位置
    		var ecdVal=filterStr($('#ecode').val()) ;//过滤了特殊字符的验证码输入内容
    			console.log(ecdVal);
    	}else{
    		alert("输入信息有误！请重新输入")
    	}
    })
})

//过滤特殊字符串
  function filterStr(str)    
    {    
        var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%+_]");    
        var specialStr = "";    
        for(var i=0;i<str.length;i++)    
        {    
             specialStr += str.substr(i, 1).replace(pattern, '');     
        }    
        return specialStr;    
    }   

