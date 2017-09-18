//双时间选择器（插件）
var startDate = new Date();
var endDate = new Date();
$('#dpd1').fdatepicker({
    format: 'yyyy/mm/dd'
})
    .on('changeDate', function (ev) {
        if (ev.date.valueOf() > endDate.valueOf()) {
            alert("您选取的时间顺序不对，请重新选择！");
            $('#dpd2').val("");
        } else {
            startDate = new Date(ev.date);
        }
        $('#dpd1').fdatepicker('hide');
    });
$('#dpd2').fdatepicker({
    format: 'yyyy/mm/dd'
}).on('changeDate', function (ev) {
    if(ev.date.valueOf() < startDate.valueOf()){
        alert("您选取的时间顺序不对，请重新选择！");
        $('#dpd2').val("");
    }else{
        endDate = new Date(ev.date);
    }
    $('#dpd2').fdatepicker('hide');
});
//搜索内容提交
$("#submit").click(function(){
    var date1=$("#dpd1").val();
    var date2=$("#dpd2").val();
    date1 = new Date(Date.parse(date1.replace(/-/g, "/")));
    date1 = date1.getTime()/1000;
    date2 = new Date(Date.parse(date2.replace(/-/g, "/")));
    date2 = date2.getTime()/1000;
    $("#dpd1").val(date1);
    $("#dpd2").val(date2);
});

//点击删除吐槽列
$(".item").on("click",".fc-9c",function(){
    $("#tucao_toggle").css("display","none");
    $("#modify_del").css("display","block");
    $("#submit_del").click(function(){
        $(this).parent().parent().parent().parent().remove();
    });
   $(".close_modify").click(function(){
       $("#modify_del").css("display","none");
   });
    $(".close_btn").click(function(){
        $(".close_modify").trigger("click");//关闭修改的遮罩层
    });
});

//吐槽开关
$("#open_toggle").click(function(){
    $("#modify_del").css("display","none");
    $("#tucao_toggle").css("display","block");
    $("#submit_del").click(function(){
        $(this).parent().parent().parent().parent().remove();
    });
    $("#close_toggle").click(function(){
        $("#tucao_toggle").css("display","none");
    });
    $(".cancel").click(function(){
        $("#close_toggle").trigger("click");//关闭修改的遮罩层
    });
    $("#all_chose").click(function(){
       $(":checkbox").attr('checked',"checked");
    })
});
