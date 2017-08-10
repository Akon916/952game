
//搜索框搜索内容
$("#search_click").click(function(){
   alert("发送搜索")
});
//搜索帖子，聚焦失焦，触发搜索图标出现
$("#search_tie").focus(function(){
    $("#search_click").css("opacity","1")
}).blur(function(){
    $("#search_click").css("opacity","0")
});