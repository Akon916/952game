
$(document).ready(function(){
    $('#footer').load('../data/footer.html')
});

//密码栏标签页切换
$("#content_change").on('click','li',function(){
    var indexIn=$(this).index();
    var contentSw=$(".content_s");
    contentSw.hide();
    contentSw.eq(indexIn).show();
    $(this).children('span').eq(1).addClass('line_color').parent().siblings().children('span').removeClass('line_color');
});
//日期选择
function pickedOne(){
    var a=$dp.cal.newdate;
    return a
};
function pickedTwo(){
    return $(this).val();
};
