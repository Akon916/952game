
$(document).ready(function(){
    $('#footer').load('../data/footer.html')
});
//�ֻ��������һ��л�
$("#main_rg_dw_h").on('click','span',function(){
    var index=$(this).index();
    var data=$('.main_rg_data');
    $(this).css('color','#0592D9').siblings().css('color','#ffffff');
    data.hide();
    data.eq(index).show(100);
});
//�ֻ������ж��ֽ�����
$(function(){
    var rq=$('.data_tel');
    var num= rq.html();
    var tel=num.substr(0,3)+"****"+num.substr(7);
    rq.text(tel);
});