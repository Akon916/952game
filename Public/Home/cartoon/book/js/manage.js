
//草稿箱点击伸缩
var acc=true;
$(".acc_title").on("click",function(){
    if(acc==true){
        $(".draft").hide(200);
        $(".acc_title>i").eq(1).css("display","none");
        $(".acc_title>i").eq(0).css("display","block");
        acc=false;
    }else if(acc==false){
        $(".draft").show(200);
        $(".acc_title>i").eq(0).css("display","none");
        $(".acc_title>i").eq(1).css("display","block");
        acc=true;
    }
});

//修改话名

$(".m_same").click(function(){
    closeMask();
    $(".modify").css("display","block");//显示修改的遮罩层
    var mo_num=$(this).parent().find(".title").html();
    var mo_name=$(this).prev().html();
    $(".inp_one").val(mo_num);
    $(".inp_two").val(mo_name);
    a();
});
function a(){
    var inp1=false,inp2=false;
    $(".inp_one").blur(function(){
        if($(this).val()!="" && $(this).val().length<=4 ){
            inp1=true;
            $(this).next().html("")
        }else
        {
            $(this).next().html("输入格式不对")
        }
    });
    $(".inp_two").blur(function(){
        if($(this).val()!="" && $(this).val().length<=20 ){
            inp2=true;
            $(this).next().html("")
        }else
        {
            $(this).next().html("输入格式不对")
        }
    });

    $(".modify_sub").click(function(){
        $(".inp_one").trigger("blur");//事件触发
        $(".inp_two").trigger("blur");
        if(inp1 && inp2){
            $(".modify_sub").submit();
            $(".modify").css("display","none");
        }else {
            $(".modify").css("display","none");
            return false
        }
    });
};

$(".close_modify").click(function(){
    $(".modify").css("display","none");//关闭修改的遮罩层
    $("#modify_del").css("display","none");
    $("#update_leg").val("");
    $("#update").css("display","none");
    $("#select").css("display","none");
});
$(".close_btn").click(function(){
    $(".close_modify").trigger("click");//关闭修改的遮罩层
});

//话删除
var modify_line;
$(".modify_del").click(function(){
    closeMask();
    $("#modify_del").css("display","block");
    modify_line=$(this).parent().parent()
});
$(".submit_del").click(function(){
    modify_line.remove();
    $("#modify_del").submit().css("display","none");
});

//更新公告
$(".notive").click(function(){
    closeMask();
    $("#update").css("display","block");
    $("#update_leg").keydown(function(){
        var length=$(this).val().length;
        if(length<=30){
            length=30-length;
            $(this).parent().next().html("<p>还可以输入 <span class='font_num'>"+length+"</span>个字</p>")
        }else{
            length=length-30;
            $(this).parent().next().html("<p>已超过 <span class='font_num'>"+length+"</span>个字</p>");
            $(this).parent().next().find("p").css("color","#e4393c")
        }
    })
});
$("#update_sub").click(function(){
   if($("#update_leg").val().length!=0 && $("#update_leg").val().length<=30){
       $("#update").submit();
   }else{
       return false
   }
});

//选择已发布的漫画状态
$("#serial").change(function(){
    closeMask();
    $("#select").css("display","block");
   var opt_htl= $(this).children('option:selected').html();
    $("#sel_change").html(opt_htl)
});

//关闭所有的遮罩层，打开遮罩层时调用
function closeMask(){
    $(".modify").css("display","none");//关闭修改的遮罩层
    $("#modify_del").css("display","none");
    $("#update_leg").val("");
    $("#update").css("display","none");
    $("#select").css("display","none");
}