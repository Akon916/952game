
$(document).ready(function(){
    $('#footer').load('../data/footer.html');
});
//日期选择
function pickedOne(){
    var a=$dp.cal.newdate;
    return a
};
function pickedTwo(){
    return $(this).val();
};
