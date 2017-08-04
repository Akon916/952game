$(document).ready(function(){
$("#footer").load('../data/footer.html')
});

//选择框点击
$("#select_line").on("click",'ul>li',function(){
   var val=$(this).html();
    $("#part_one_ser_cont").html(val);
    $("#select_line").hide();
    jdg=1;
});
var jdg=1;
$("#part_one_ser_cont").click(function(){
    if(jdg==1){
        $("#select_line").show(100);
        jdg=0;
    }else if(jdg==0){
        $("#select_line").hide();
        jdg=1;
    }
});
//页面跳转传值
$('#main_part_two').on('click','ul>li>a:nth-child(3)',function(){
    var val=$(this).attr('val');
    var url='faq.html?'+"pro="+encodeURI(val);
    window.location.href=url;
});