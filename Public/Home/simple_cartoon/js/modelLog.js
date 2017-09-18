//登录头像的放大效果
$(".header_link>a").mouseenter(function(){
    $("#person_show").addClass("person_show");
    $("#person_center_pst").animate({height:"120px"},200)
});
$(".header_link>a").mouseleave(function(){
    $("#person_show").removeClass("person_show");
    $("#person_center_pst").animate({height:"0px"},200)
});

//登录
$('#entry_lg').click(function(){
    $("#login_second").css('display','block')
});
$('#login_book').click(function(){
    $("#login_second").css('display','block')
});
$('#close_login').click(function(){
    $("#login_second").css('display','none')
});

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

//点击模态框登录的验证
$(function(){
	var inp1=false,inp2=false,inp3=false;
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
            $("#notice_three").text('* 用户名输入有误').css('color','red');
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
            $("#notice_three").text('* 密码输入有误').css('color','red');
            inp2=false;
        }
    });
    //验证验证码
    $('.s_code').focus(function(){
        $(this).prev().html('').css('color','#000000');
    }).blur(function(){
        if($('.s_code').val()!==''){
           inp3=true;
        }else{
            $("#notice_three").text('* 验证码不能为空').css('color','red');
            inp3=false;
        }
    });
	if($('.s_code').val()==''){
		inp3=false;
	}else{
		inp3=true;
	}

    //提交(ajax)
    $("#login_enter_two").click(function(){
    	if(inp1==true && inp2==true && inp3==true){
    		//发起ajax位置
    		var ecdVal=filterStr($('.s_code').val()) ;//过滤了特殊字符的验证码输入内容
    			console.log(ecdVal);
    	}else{
    		alert("输入信息有误！请重新输入")
    	}
    })
})