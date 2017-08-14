
//登录头像的放大效果
$("#person_show").mouseover(function(){
    $(this).addClass("person_show");
    $("#person_center_pst").animate({height:"220px"},200)
});
$("#person_center_pst"). mouseleave(function(){
    $("#person_show").removeClass("person_show");
    $("#person_center_pst").animate({height:"0px"},200)
});
//登录
$('#entry_lg').click(function(){
    $("#login_second").css('display','block')
});
$('#login_book').click(function(){
    $("#login_second").css('display','block')
});
$('#close_login').click(function(){
    $("#login_second").css('display','none')
});