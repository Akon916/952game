
$(function(){
    var inp1=false,inp2=false,inp3=false,inp4=false,inp5=false;
    //验证真实中文名称
    $('#username').focus(function(){
        $(this).next().text('').css('color','#000000');
    }).blur(function(){
        if(!$(this).val().match(/^[\u4E00-\u9FA5]{1,6}$/)){
            $(this).next().text('* 请输入你的真实姓名').css('color','red');
        }else if( $(this).val().match(/[^~></;\x22]+/)) {
            $(this).next().text('* 输入成功').css('color','green');
            inp1=true;
        }
    });
    //验证身份证号码
    $('#card').focus(function(){
        $(this).next().text('').css('color','#000000');
    }).blur(function(){
        if(!$(this).val().match(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/)){
            $(this).next().text('* 请输入正确的身份证号码').css('color','red');
        }else if( $(this).val().match(/[^~></;\x22]+/)) {
            $(this).next().text('* 输入成功').css('color','green');
            inp2=true;
        }
    });
    ////验证身份证图片
    //$('.cla_file_one').blur(function(){
    //    if($(this).val()){
    //        inp4=true;
    //    }else{
    //        return
    //    }
    //});
    //$('.cla_file_two').blur(function(){
    //    if($(this).val()){
    //        inp5=true;
    //    }else{
    //        return
    //    }
    //});

    //验证银行卡
    $('#bank').focus(function(){
        $(this).next().text('').css('color','#000000');
    }).blur(function(){
        var reg =  /^\d{19}$/g;
        if(!reg.test($(this).val())){
            $(this).next().text('* 请输入正确的银行卡号码').css('color','red');
        }else {
            $(this).next().text('').css('color','green');
            inp3=true;
        }
    });

  //身份证图片压缩
    var that;
    $(".id_pic").on("change",".cla_file",function(){
        that=$(this);

        if ($(this)[0].files.length === 0) {
            alert("请选择图片");
            return; }
        var oFile1 = $(this)[0].files[0];
        //if (!rFilter.test(oFile.type)) { alert("You must select a valid image file!"); return; }

        if(oFile1.size>5*1024*1024){
            //message(myCache.par.lang,{cn:"照片上传：文件不能超过5MB!请使用容量更小的照片。",en:"证书上传：文件不能超过100K!"})
            alert("照片上传：文件不能超过1MB!请使用容量更小的照片。");
            return;
        }
        if(!new RegExp("(jpg|jpeg|png)+","gi").test(oFile1.type)){
            alert("照片上传：文件类型必须是JPG、JPEG、PNG");
            return;
        }
        var str1;
        var reader = new FileReader();
        reader.onload = function(e) {
            var base64Img1= e.target.result;

                    // --执行resize。压缩
                    var _ir=ImageResizer({
                        resizeMode:"auto"
                        ,dataSource:base64Img1
                        ,dataSourceType:"base64"
                        ,maxWidth:800 //允许的最大宽度
                        ,maxHeight:420 //允许的最大高度。
                        ,onTmpImgGenerate:function(img){
                        }
                        ,success:function(resizeImgBase64,canvas){
                            //resizeImgBase64.substr(22）是压缩之后的值
                            //赋值到隐藏域传给后台
                            var  browser_msgT=myBrowser();
                            if(browser_msgT=="IE" || browser_msgT=="Safari"){
                                str1="<input type='file' class='cla_file cla_file_one'/>";
                                str1+=" <input  name='idCard_image[]' class='id_card' value="+resizeImgBase64+" type='hidden'/>";
                                str1+="<img src="+base64Img1+" alt=''/>";
                                str1+="<i class='iconfont'>&#xe674;</i>";
                                str1+="<div> 替换</div>";
                            }else{                                              //在非IE Safari的情况下替换的片段（差别就是添加了title属性在file里）
                                str1="<input type='file' class='cla_file cla_file_one' title='&nbsp;' />";
                                str1+=" <input  name='idCard_image[]' class='id_card' value="+resizeImgBase64+" type='hidden'/>";
                                str1+="<img src="+base64Img1+" alt=''/>";
                                str1+="<i class='iconfont'>&#xe674;</i>";
                                str1+="<div> 替换</div>";
                            }
                            that.parent().html(str1);
                        }
                        ,debug:true
                    });
            };
            //image.src= base64Img1;
        reader.readAsDataURL(oFile1);
        });

    //提交按钮,所有验证通过方可提交
    $('#submit').click(function(){
        if($(".id_card").val()!=""){
            inp4=true;
        }
        if(inp1 && inp2 && inp3 && inp4){
            $('form').submit();
        }else{
            return false;
        }
    });


    });
//浏览器判断(用户判断file 在选取文件时，在chrome 360 浮出选择内容)
    function myBrowser(){
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isOpera = userAgent.indexOf("Opera") > -1;
        if (isOpera) {
            return "Opera"
        }; //判断是否Opera浏览器
        if (userAgent.indexOf("Firefox") > -1) {
            return "FF";
        } //判断是否Firefox浏览器
        if (userAgent.indexOf("Chrome") > -1){
            return "Chrome";
        }
        if (userAgent.indexOf("Safari") > -1) {
            return "Safari";
        } //判断是否Safari浏览器
        if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
            return "IE";
        }; //判断是否IE浏览器
    }

