$(document).ready(function(){
    $('#footer').load('data/footer.html')
});
//标签页切换
$("#recharge_lf>ul>li").on("click", function () {
    var index = $(this).index();
    var divs = $("#recharge_rg>div");
    $(this).css('background','#ffffff');
    $(this).siblings().css('background','none');
    divs.hide();
    divs.eq(index).show();
});