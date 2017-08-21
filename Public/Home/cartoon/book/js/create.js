

$(function(){
    var inp1=false,inp2=false,inp3=false,inp4=false,inp5=false,inp6=false,inp7=false,inp8=false;
    // 验证漫画名称
    $('#cartoon_name').focus(function(){
        $(this).parent().next().html('4到14个字符（数字、字母、下划线）').css('color','#000000');
    }).blur(function(){
        if($(this).val().length >= 1 && $(this).val().length <=20 && $(this).val()!='') {
                $(this).next().html('').css('color','green');
                inp1=true;
        }else{
            $(this).next().text('* 名称必须填写( 20位以内 )').css('color','#e4393c');
        }
    });
    //验证输入图片

    $('#upFile').change(function(){
       if($(this).val()==""||$(this).val()==null){
          inp2=false;
       }
        else {
           pic();
         inp2=true;
      }
    });
    //验证题材
    if($("#theme>input:checked").length==1){
        inp3=true;
    }
    $("#theme").on("click","input",function(){
       var theme_n= $("#theme>input:checked").length;
        if(theme_n>3){
            $(this).parent().next().text('* 只能最多选择三个').css('color','#e4393c');
            inp3=false;
        }else if(theme_n<=3){
            $(this).parent().next().text('').css('color','#e4393c');
            inp3=true;
        }
    });
    //验证一句话
    $('#word').focus(function(){
        $(this).next().text('').css('color','#000000');
    }).blur(function(){
        if($(this).val().length<=10 && $(this).val()!=""){
            $(this).next().text('').css('color','green');
            inp4=true;
        }else{
            $(this).next().text('* 请输入内容( 10字节 )').css('color','#e4393c');
        }
    });
    //验证漫画简介
    $('.text_read>textarea').focus(function(){
        $(this).next().text('').css('color','#000000');
    }).blur(function(){
        if($(this).val().length<=500 && $(this).val().length>=20 && $(this).val()!=""){
            inp5=true;
        }else {
            $(this).next().text('* 请输入内容( 20~500 )').css('color','#e4393c');
        }
    });
    //勾选阅读协议
    if($('.agree>input').is(':checked')){
        inp6=true;
    }
    $('.agree>input').click(function(){
        if($(this).is(':checked')){
            inp6=true;
        }else{
            inp6=false;
        }
    });
    //提交按钮,所有验证通过方可提交
    $('#submit').click(function(){
        if(inp1 && inp2 && inp3 && inp4 && inp5 && inp6){
            $('form').submit();
        }else{
            return false;
        }
    });
});

//剪裁的图片显示关闭
function pic(){
    $("#pic").css("display","block")
}
$("#close").click(function(){
    $("#pic").css("display","none")
});
//压缩图片，传值回隐藏域
$(function(){
    var _upFile=document.getElementById("upFile");
    var base64Img;
    _upFile.addEventListener("change",function(){

        if (_upFile.files.length === 0) {
            alert("请选择图片");
            return; }
        var oFile = _upFile.files[0];
        //if (!rFilter.test(oFile.type)) { alert("You must select a valid image file!"); return; }

        /*  if(oFile.size>5*1024*1024){
         message(myCache.par.lang,{cn:"照片上传：文件不能超过5MB!请使用容量更小的照片。",en:"证书上传：文件不能超过100K!"})

         return;
         }*/
        if(!new RegExp("(jpg|jpeg|png)+","gi").test(oFile.type)){
            alert("照片上传：文件类型必须是JPG、JPEG、PNG");
            $("#upFile").val("");
            return;
        }

        var reader = new FileReader();
        reader.onload = function(e) {
            pic();//调用剪裁的遮罩层
            base64Img= e.target.result;
            $("#main_m_lf>img").attr("src",base64Img);
            $("#main_m_rg>img").attr("src",base64Img);
            $("#preview").css("opacity",'1');

           // --执行resize。
            var _ir=ImageResizer({
                    resizeMode:"auto"
                    ,dataSource:base64Img
                    ,dataSourceType:"base64"
                    ,maxWidth:300 //允许的最大宽度
                    ,maxHeight:420 //允许的最大高度。
                    ,onTmpImgGenerate:function(img){

                    }
                    ,success:function(resizeImgBase64,canvas){
                        //压缩后预览
                        //$("#nextview").attr("src",resizeImgBase64);

                        //赋值到隐藏域传给后台
                       $('#imgOne').val(resizeImgBase64.substr(22));

                        //$('#upTo').on('click',function(){
                        //    //console.log('传给后台base64文件数据为：'+resizeImgBase64.substr(22));
                        //    $.ajax({
                        //        url:'server.php',
                        //        type:'POST',
                        //        dataType:'json',
                        //        data:{
                        //            imgOne:resizeImgBase64.substr(22)
                        //        },
                        //        success:function(data){
                        //            alert(data.msg);
                        //        }
                        //    });
                        //});

                    }
                    ,debug:true
            });

        };
        reader.readAsDataURL(oFile);

    },false);
//遮罩层点击确认
    $("#confirm_c").click(function(){
        $("#preview").attr("src",base64Img);
        $("#pic").css("display","none");
    });
//遮罩层点击取消
    $("#cancel").click(function(){
        base64Img="";//如果取消则选择的值至为空
        $("#preview").attr("src",base64Img);
        $("#pic").css("display","none");
        $("#upFile").val("");
        $("#preview").css("opacity",'0')
    });
});
//处理一开始没有添加src地址，图片在ie显示小图标的问题，透明度隐藏
    if($("#preview").attr("src")==""){
        $("#preview").css("opacity",'0')
    }else{
        $("#preview").css("opacity",'1')
    }


