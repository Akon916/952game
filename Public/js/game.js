$(document).ready(function(){
   $('#footer').load('data/footer.html');
});
//导航点击滑动
jQuery(".picScroll-left").slide({
   titCell:".hd ul",
   mainCell:".bd ul",
   autoPage:true,
   effect:"left",
   scroll:1,
   vis:6,
   trigger:"click"
});

//banner
jQuery(".slideBox").slide({
   mainCell:".bd ul",
   autoPlay:true
});