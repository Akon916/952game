//移动到上传作品上面，遮罩层显示
function mouse(){
    $(".works_list").mouseenter(function(){ //用来在图片添加后，移动到内容上面没有浮出替换的遮罩层
        $(this).find(".zc_show").css("display","block")
    }).mouseleave(function(){
        $(this).find(".zc_show").css("display","none")
    });
    var length=$(".works_list").length;//选取的张数
    $("#pic_num").html(length-1);
}mouse();

//添加漫画页面内容
var base64Img;
$(function(){
    var _upFile=document.getElementById("upFile");
//利用img的fileSize;
    _upFile.addEventListener("change",function(e){

       var pic_name=_upFile.files[0].name;
        if (_upFile.files.length === 0) { //图片类型大小判断
            alert("请选择图片");
            return; }
        var oFile = _upFile.files[0];
        //if (!rFilter.test(oFile.type)) { alert("You must select a valid image file!"); return; }

         if(oFile.size>1024*1024){
         //message(myCache.par.lang,{cn:"照片上传：文件不能超过5MB!请使用容量更小的照片。",en:"证书上传：文件不能超过100K!"})
         alert("照片上传：文件不能超过1MB!请使用容量更小的照片。");
         return;
         }
        if(!new RegExp("(jpg|jpeg|png)+","gi").test(oFile.type)){
            alert("照片上传：文件类型必须是JPG、JPEG、PNG");
            return;
        }
        var reader = new FileReader();
        reader.onload = function(e) {
             base64Img= e.target.result;

            //判断图片的大小
            var image = new Image();
            image.onload=function(){
                var width = image.width;
                var height = image.height;

                if(width>=400 && height<=4000){ //
                    var length=$(".works_list").length;
                    var title;
                    //var up_val=$("#upFile").val();
                    var  browser_msg=myBrowser(); var str;

                    if(browser_msg=="IE" || browser_msg=="Safari"){
                        str= "<div class='works_list'>";
                        str+="<div>";
                        str+="<img src="+base64Img+"  alt=''class='image_change' />";
                        str+="<span>"+length+"</span>";
                        str+="<div class='zc_show'>";
                        str+="<input type='file' class='same_file' />";
                        str+=" <input class='imgOne' name='imgOne[]' type='hidden'/>";
                        str+="<span>替换</span>";
                        str+="</div>";
                        str+="</div>";
                        str+="<div>";
                        str+="<input type='checkbox'/>";
                        str+="<span class='font_hid'>"+pic_name+"</span>";
                        str+="</div>";
                        str+="</div>";

                    }else{                                                //在非IE Safari的情况下替换的片段（差别就是添加了title属性在file里）
                        str= "<div class='works_list'>";
                        str+="<div>";
                        str+="<img src="+base64Img+"  alt=''class='image_change' />";
                        str+="<span>"+length+"</span>";
                        str+="<div class='zc_show'>";
                        str+="<input type='file' class='same_file' title='&nbsp;' />";
                        str+=" <input class='imgOne' name='imgOne[]' type='hidden'/>";
                        str+="<span>替换</span>";
                        str+="</div>";
                        str+="</div>";
                        str+="<div>";
                        str+="<input type='checkbox'/>";
                        str+="<span class='font_hid'>"+pic_name+"</span>";
                        str+="</div>";
                        str+="</div>";
                    }

                    $(str).insertBefore($(".add_list"));
                    $("#upFile").val(""); //清除选取按钮内的悬浮出来的效果
                    mouse();

                    // --执行resize。
                    var _ir=ImageResizer({
                        resizeMode:"auto"
                        ,dataSource:base64Img
                        ,dataSourceType:"base64"
                        ,maxWidth:800 //允许的最大宽度
                        ,maxHeight:420 //允许的最大高度。
                        ,onTmpImgGenerate:function(img){

                        }
                        ,success:function(resizeImgBase64,canvas){
                            //压缩后预览
                            //$("#nextview").attr("src",resizeImgBase64);

                            //赋值到隐藏域传给后台
                            $(".add_list").prev().find("[type='hidden']").val(resizeImgBase64.substr(22));
                        }
                        ,debug:true
                    });

                }else{
                    alert("图片的尺寸不符合格式！");
                    $("#upFile").val(""); //清除选取按钮内的悬浮出来的效果
                    return false;
                }
            };
            image.src= base64Img;

    };
        reader.readAsDataURL(oFile);

    },false);
 //删除所有的图片
    $("#pic_fail").click(function(){
        $(".works_list:not(:last)").remove();
        mouse();
    });
//删除选中的图片
    $("#pic_check").click(function(){
        $(":checked").parent().parent().remove();
        mouse();
       //选取图片重新编号
        var remove_num=$(".works_list>div>span").length;
        for(var i=0;i<remove_num;i++){
            $(".works_list>div:first-child>span").eq(i).html(i+1)
        }
    })
});

//图片被替换
var that;
$(".content_down").on("change",".same_file",function(){
        that=$(this).parent().parent();
         var pic_name1=$(this)[0].files[0].name;

        if ($(this)[0].files.length === 0) {
            alert("请选择图片");
            return; }
        var oFile1 = $(this)[0].files[0];
        //if (!rFilter.test(oFile.type)) { alert("You must select a valid image file!"); return; }

        if(oFile1.size>1024*1024){
            //message(myCache.par.lang,{cn:"照片上传：文件不能超过5MB!请使用容量更小的照片。",en:"证书上传：文件不能超过100K!"})
            alert("照片上传：文件不能超过1MB!请使用容量更小的照片。");
            return;
        }
        if(!new RegExp("(jpg|jpeg|png)+","gi").test(oFile1.type)){
            alert("照片上传：文件类型必须是JPG、JPEG、PNG");
            return;
        }
        var str1;
        var leg= $(this).parent().prev().html();
        var reader = new FileReader();
        reader.onload = function(e) {
           var base64Img1= e.target.result;

            //判断图片的大小
            var image = new Image();
            image.onload=function(){
                var width = image.width;
                var height = image.height;

                if(width>=400 && height<=4000){//判断图片的大小，确定是否替换
                    // --执行resize。
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
                                str1="<div>";
                                str1+="<img src="+base64Img1+"  alt=''class='image_change' />";
                                str1+="<span>"+leg+"</span>";
                                str1+="<div class='zc_show'>";
                                str1+="<input type='file' class='same_file' />";
                                str1+=" <input class='imgOne' name='imgOne[]' type='hidden' value="+resizeImgBase64.substr(22)+" />";
                                str1+="<span>替换</span>";
                                str1+="</div>";
                                str1+="</div>";
                                str1+="<div>";
                                str1+="<input type='checkbox'/>";
                                str1+="<span class='font_hid'>"+pic_name1+"</span>";
                                str1+="</div>";
                            }else{                                              //在非IE Safari的情况下替换的片段（差别就是添加了title属性在file里）
                                str1="<div>";
                                str1+="<img src="+base64Img1+"  alt=''class='image_change' />";
                                str1+="<span>"+leg+"</span>";
                                str1+="<div class='zc_show'>";
                                str1+="<input type='file' class='same_file'  title='&nbsp;'/>";
                                str1+=" <input class='imgOne' name='imgOne[]' type='hidden' value="+resizeImgBase64.substr(22)+" />";
                                str1+="<span>替换</span>";
                                str1+="</div>";
                                str1+="</div>";
                                str1+="<div>";
                                str1+="<input type='checkbox'/>";
                                str1+="<span class='font_hid'>"+pic_name1+"</span>";
                                str1+="</div>";
                            }
                            that.parent().html(str1);
                        }
                        ,debug:true
                    });

                }else{
                    alert("图片的尺寸不符合格式！");
                    that.val(""); //清除选取按钮内的悬浮出来的效果
                    return false;
                }
            };
            image.src= base64Img1;

        };
        reader.readAsDataURL(oFile1);
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

//表单提交

$(function(){
var inp1=false,inp2=false,inp3=false;
$("#serial").blur(function(){
   if($(this).val.length<=8 && $(this).val()!="" ){
       inp1=true;
       $(this).next().css("color","#888");
   }else{
       $(this).next().css("color","#e4393c");
   }
});
$("#what_name").blur(function(){
    if($(this).val.length<=40 && $(this).val()!="" ){
        inp2=true;
        $(this).next().css("color","#888");
    }else{
        $(this).next().css("color","#e4393c");
    }
});
$('#submit').click(function(){
    if($(".works_list:not(:last)").length!=0){
        inp3=true;
    }
    if(inp1 && inp2 && inp3 ){
        $('form').submit();
    }else{
        return false;
    }
});
    //预览确认发布提交
    $("#submit_t").click(function(){
        if($(".works_list:not(:last)").length!=0){
            inp3=true;
        }
        if(inp1 && inp2 && inp3 ){
            $('form').submit();
        }else{
            return false;
        }
    });

});

//预览
var pew=true;//用来判断避免反复点击预览添加代码片段
$("#prew_i").click(function(){
    if(pew==true){
        $("#preview").css("display","block");
        var pstr;
        var fa=$(".works_list:not(:last)");
        var imgStr= fa.eq(0).children().find("img").attr("src");
        var imgNum= fa.eq(0).children().find("span").html();

        pstr= " <div class='prew_list remove_cla'>";
        pstr+="<img src="+imgStr+" alt=''/>";
        pstr+="<span class='font_hid'>"+imgNum+"</span>";
        pstr+=" <span class='font_hid'>"+$("#what_name").val()+"</span>";
        pstr+="</div>" ;
        $("#preview_m").append(pstr);
        pew=false;
    }else if(pew==false){
        return false;
    }
});
//关闭预览
$("#close").click(function(){
    $("#preview").css("display","none");
    $(".remove_cla").remove();
    pew=true;
});
