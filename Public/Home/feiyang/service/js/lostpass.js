$(document).ready(function(){
    $("#footer").load('../data/footer.html')
});
// ÷ª˙£¨” œ‰’“ªÿ«–ªª
$("#main_rg_dw_one").on('click','span',function(){
    var index=$(this).index();
    var data=$('.main_rg_dw_two');
    $(this).css('color','#0592D9').siblings().css('color','#888888');
    data.hide();
    data.eq(index).show(100);
});