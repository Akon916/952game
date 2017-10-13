
//监听窗口的改变，低于1200px时，隐藏侧边栏
$(window).resize(function() {
	wrs();
});
wrs();				//一开始就执行一次事件监听屏幕的宽度
function wrs(){
	 var winWidth = $(window).width();
	 //console.log(winWidth);
	 if (winWidth <= '1300') {
	 	tgg(); //隐藏左侧滚动栏
	 	//yin(); //隐藏右侧吐槽列
	 } else {  }
}


//左侧滚动条插件
// $(window).load(function() {
// 	/* custom scrollbar fn call */
// 	$(".content_scroll").mCustomScrollbar({
// 		scrollButtons: {
// 			enable: true
// 		}
// 	});
// });


//滚动条点击toggle

function tgg(){
	$(".content_scroll").fadeOut(100);
	$(".guess").fadeOut(100);
	$(".toggle_c").animate({
		left: "10px"
	}, 100);
	$(".rudder").css('display', 'none');
	$(".sub").css('display', 'block');
	tgl = true;
}
var tgl = false;
$("#togge_scroll").click(function() {
	if (tgl == false) {
		tgg();
	} else if (tgl == true) {
		$(".content_scroll").fadeIn(100);
		$(".guess").fadeIn(100);
		$(".toggle_c").animate({
			left: "140px"
		}, 100);
		$(".rudder").css('display', 'block');
		$(".sub").css('display', 'none');
		tgl = false;
	}

})

//工具栏的效果

	function footer_toggle(){

		$("#footer").mouseenter(function() {

			$(this).animate({opacity:"1"}, 200)
		}).mouseleave(function(){

		$(this).animate({opacity:"0"}, 500);
		cancel_f();
		});
}footer_toggle();

//点击固定工具
var toggle_fixed=false;
	$("#fixed").click(function() {
		if (toggle_fixed == false) {
			toggle_fixed = true;
			 $("#footer").css("opacity",1);
			 $(this).css("color",'#eb862d')
			$("#footer").unbind("mouseenter")
			$("#footer").unbind("mouseleave")
		} else if (toggle_fixed == true) {
			toggle_fixed = false;
			 $("#footer").css("opacity",0);
			 $(this).css("color",'#8b8b8b');
			 footer_toggle();
		}
	});
//当底部固定按钮取消之后，底部打开的样式随之被关闭（下面是关闭样式，整理成一个调用函数）
function cancel_f(){
	tabl_t = false;
	$(".tabl").fadeOut(100);
	$(".tabl_toggle").css('color', '#8b8b8b');     //目录的变化
	tabl_t=false;
     //页数的变化
	$(".page_scl").fadeOut(100);
	$(".change_btn>span").css("color", "#8b8b8b")
	change_page = false;
}

//浏览模式，灯光
var switch_f=false;
$(".switch").click(function(){
	if(switch_f==false){
		$(this).css("color",'#eb862d')
		$("body").css("background","#f7f7f7");
		$(".mCSB_dragger_bar").css('background', '#eb862d');
		$(".swi_n").css('color', '#888');
		$(".fix_n").css('color', '#888');
		$(".bd").css("background","#e8e3d5");			//吐槽里面滚动变化的背景色
		$(".next").css({color:"#888",borderColor:"#888"});
		$(".prev").css({color:"#888",borderColor:"#888"});
		switch_f=true;
	}else if(switch_f==true){
		$(this).css("color",'#8b8b8b')
		$("body").css("background","#333");
		$(".swi_n").css('color', '#fff');
		$(".fix_n").css('color', '#fff');
		$(".bd").css("background","#333");			//吐槽里面滚动的背景色
		$(".mCSB_dragger_bar").css('background', 'rgba(255,255,255,0.75)');
		$(".next").css({color:"#facbd6",borderColor:"#eee"});
		$(".prev").css({color:"#facbd6",borderColor:"#eee"});
		switch_f=false;
	}
	
})	

// //吐槽轮播（superslide插件）
// jQuery(".txtMarquee-top").slide({mainCell:".bd ul",autoPlay:true,effect:"topMarquee",vis:6,interTime:50,trigger:"click"});

// //点击显示工具栏  触发$("#fixed")的点击事件
// var tool_l=false;
// $("#tool").click(function(){
//     $("#fixed").trigger('click')
//     if(tool_l==false){
//     	$(this).text('隐藏工具栏')
//     	tool_l=true;
//     }else if(tool_l==true){
//     	$(this).text('显示工具栏')
//     	tool_l=false;
//     }
// })

// //点击隐藏右侧的吐槽列表（控制样式的变化）
// var yin_l=false;
// function yin(){
	
// 		$(".txtMarquee-top").fadeOut(0);
// 		$("#send_tocao").fadeOut(0);
// 		$("#tocao_h").fadeOut(0);
// 		$("#aside_right").animate({width: "150px", height: "200px",right:"5px",top:"500px"}, 0)
// 		$(".tocao_list").text("显示");
// 		yin_l=true;
// }
// $("#yin_tocao").click(function(){
// 	if(yin_l==false){
// 		yin();
// 	}else if(yin_l==true){
// 		$(".txtMarquee-top").fadeIn(0);
// 		$("#send_tocao").fadeIn(0);
// 		$("#tocao_h").fadeIn(0);
// 		$("#aside_right").animate({width: "250px", height: "500px",right:"20px",top:"100px"}, 0)
// 		$(".tocao_list").text("隐藏");
// 		yin_l=false;
// 	}
	
// })

//开关，固定工具栏的提示

	$(".switch_h").mouseenter(function() {
		$(this).find('.swi_n').fadeIn(100);
	}).mouseleave(function() {
		$(this).find('.swi_n').fadeOut(100);
	});
	$(".fix_h").mouseenter(function() {
		$(this).find('.fix_n').fadeIn(100);
	}).mouseleave(function() {
		$(this).find('.fix_n').fadeOut(100);
	});

//点击目录
var tabl_t=false;
$(".tabl_toggle").click(function(){
	if(tabl_t==false){
		$(".tabl").fadeIn(100);
		$(this).css('color', '#eb862d');
		tabl_t=true;
	}else if (tabl_t==true) {
		$(".tabl").fadeOut(100);
		$(this).css('color', '#8b8b8b');
		tabl_t = false;
	}
})
//点击向下图标，事件触发关闭
$(".tabl_rgt").click(function(){
	$(".tabl_toggle").trigger('click')
})


//点击页数
var change_page=false;
$(".change_btn").click(function(){
	if(change_page==false){
		$(".page_scl").fadeIn(100);
		$(".change_btn>span").css("color", "#eb862d")
		change_page=true;
	}else if(change_page==true){
		$(".page_scl").fadeOut(100);	
		$(".change_btn>span").css("color", "#8b8b8b")
		change_page=false;
	}
	
})

//手动调整漫画的大小
	//默认的大小
	$(".size_c").click(function(){
		pg_size=800;
		$(".page_size").css("width",pg_size);
	})

	//变大
	var pg_size=800;
	$(".f_add").click(function(){
		
		pg_size+=50;
		if(pg_size>=1300){
			return
		}else{
			$(".page_size").css("width",pg_size+"px");	
		}
	})

	//变小
	$(".f_ruduce").click(function(){
		pg_size=pg_size-50;
		if(pg_size<400){
			return
		}else{
			$(".page_size").css("width",pg_size+"px");	
		}
	})



//翻页的效果

function page_h(){						//获取所有的图片的距离文档顶部的距离
	var pg = document.querySelectorAll(".page_size");
	var s = []; //页面高度集合
	var page_num = pg.length; //漫画当前话的页数
	for (var i = 0; i < pg.length; i++) {
		var pg_id = pg[i];
		var pg_hgt = getElementPosition(pg_id);
		s.push(pg_hgt);
	}
	return s;
}

//调用函数，得出x,y的值（每张图在页面上的高度）
function getElementPosition(e) {
			var e=e||window.event
            var x = 0, y = 0;
            while (e != null) {
                x += e.offsetLeft;
                y += e.offsetTop;
                e = e.offsetParent;
            }
            //return { x: x, y: y };
            return y
}
//判断漫画页所处的页数
var page_index=null;				//漫画所处的页数
var box = document.getElementsByClassName('page_size');
$(".page_sum").html(box.length);						//把这一话的所有页数塞回去页面总数
 document.addEventListener('scroll',function(){
   scollPage();
 
 })
 scollPage()					//一开始先执行一次（获取图片所在的位置）
 function scollPage(){
 //滚动条高度+视窗高度 = 可见区域底部高度
	var scrollT=document.body.scrollTop || document.documentElement.scrollTop;
	var visibleBottom = scrollT+ document.documentElement.clientHeight;
  // //可见区域顶部高度
	var visibleTop = scrollT;
  // //可见区域的中间高度
	var visibleMid=(visibleBottom+visibleTop)/2+50;
//console.log(visibleBottom);

  //console.log(visibleBottom,visibleTop,visibleMid);
	for (var i = 0; i < box.length; i++) {

		var centerY = box[i].offsetTop + (box[i].offsetHeight / 2); //可视窗口的顶部
		var topY = box[i].offsetTop; //可视窗口的顶部
		var footerY = box[i].offsetTop + box[i].offsetHeight; //可视窗口的底部
		if (centerY > visibleTop && centerY < visibleBottom) { //是否在窗口当中

			if (visibleMid > topY && visibleMid < footerY) { //显示在窗口中间位置的图片i
				//console.log("正处于的图片数" + i);
				page_index=i;
				$(".page_init").html(i+1);
				$(".page_act>li").eq(i).siblings().find("span").css("color","#333");
				$(".page_act>li").eq(i).find("span").css("color","red");

			} else {}

			// console.log('第'+i+'个区域可见');
		} else {

			//console.log('第'+i+'个区域不可见');
		}
	}

 };
var html='';
for(var i=0;i<box.length;i++){
	html+='<li onclick="pageJump('+i+');"><a href="javascript:void(0);"> 第 <span class="page_list">'+(i+1)+'</span> 页</a></li>';
}
$(".page_act").html(html);
//点击跳转指定的页面
function pageJump(i){
	var pl=page_h();						//获取所有的图片的距离文档顶部的距离
	var headerH=$("#header").height();
	$('body,html').animate({scrollTop:(pl[i]-headerH)},0);
}

var pos=null;			//确定鼠标处于图片的左右侧，保存一个变量，供下面调用
function mouseConfirm(){
	$('.page_size').mousemove(function(e){
	    //$(this).css({cursor:"url(../images/co7-logo.png),auto"})
	    var pic_t=page_h();						//获取所有的图片的距离文档顶部的距离
	    	pic_t=pic_t[page_index];			//图片顶部记录page的距离
	    var pic_f=pic_t +$('.page_size').eq(page_index).height();	//图片底部距离的顶部的位置
	    var pic_w=$('.page_size').eq(page_index).width()			//图片宽度
	    var wS=$(window).width();
	    var msA=mouseAdd(e);

	    if(msA.x>=(wS/2)){
	    	//console.log("在右边");
	    	$(this).css({cursor:"url(images/right_page.png),url(images/right.ico),auto"})
	    	pos=1;
	    }else if(msA.x<(wS/2)){
	    	//console.log("在左边");
	    	$(this).css({cursor:"url(images/left_page.png),url(images/left.ico),auto"});
	    	pos=0;
	    }
	});
 };mouseConfirm();

function mouseAdd(e){     //鼠标的位置 
　　 var e= e || window.event;
     var x=e.pageX;
     var y=e.pageY;
     return{"x":x,"y":y}
}

//点击图片左右翻页
function pageClick(){
	$('#content').on("click", ".page_size", function() {
		var headerH = $("#header").height();
		var index = $(this).index();
		if (pos === 1) {
			//console.log("点击了右边");
			++index;
			var hp=page_h();
			if(index>=hp.length){
				return
			}
			$('body,html').animate({
				scrollTop: (hp[index] - headerH)
			}, 0);
			$('.page_size').eq(index).css({cursor:"url(images/right_page.png),auto"})//用来解决点击切换的向右的按钮切换时跳动
		} else if (pos === 0) {
			--index;	
			if(index==-1){
				return
			}
			//console.log("点击了左边");
			var hp=page_h();
			$('body,html').animate({
				scrollTop: (hp[index] - headerH)
			}, 0);
			$('.page_size').eq(index).css({cursor:"url(images/left_page.png),auto"})//用来解决点击切换的向左的按钮切换时跳动
		}
	})
};pageClick();


//吐槽

//打开
// $(".tucao_btn").click(function(){
// 	$("#complaints").css("display","block");
// 	$('.page_size').off("mousemove");		//解除事件
// 	$('.page_size').css('cursor',"default");//将鼠标放置图片上，鼠标样式变成default，不知道为什么上面解除事件后在最后一张图片保留箭头的样式，所有统一再改一下样式
// 	$('#content').off("click", ".page_size");
// })
// //关闭
// $(".cpt_close").click(function(){
// 	$("#complaints").css("display","none");
// 	mouseConfirm();							//调用上面左右换图标的样式
// 	pageClick();							//调用上面点击翻页的事件
// })

// 	//选择字符的弹出
// var str_t=false;
// $(".str_tgl").click(function(){
// 	if(str_t==false){
// 		$(".cpt_table").fadeIn(100);
// 		$(this).css("color","#eb862d");
// 		str_t=true;
// 	}else if(str_t==true){
// 		$(".cpt_table").fadeOut(100);
// 		$(this).css("color","#8b8b8b");
// 		str_t=false;
// 	}
// })
// 	//还可以输入多少个字
// var textVal;
// function figures(){
// 	var font_num=$("#cpt_t").val().length;
// 	$(".surplus").html(50-font_num);
// 	if(font_num>=50){
// 		var length=$("#cpt_t").val().slice(0,50);
// 		$(".surplus").html("0");
// 		$("#cpt_t").val(length);
// 		textVal=$("#cpt_t").val(length);
// 		//return textVal;
// 	}else{
// 		textVal=$("#cpt_t").val();
// 	}
	
// }
// var btn=document.getElementById("cpt_t");
//     btn.oninput=function(){
//     	figures();
//     }

// //移动了光标还在原位置插入选择的字符
// $(function() {
// 	/* 在textarea处插入文本--Start */
// 	(function($) {
// 		$.fn.extend({
// 			insertContent: function(myValue, t) {
// 				var $t = $(this)[0];
// 				if (document.selection) { // ie  
// 					this.focus();
// 					var sel = document.selection.createRange();
// 					sel.text = myValue;
// 					this.focus();
// 					sel.moveStart('character', -l);
// 					var wee = sel.text.length;
// 					if (arguments.length == 2) {
// 						var l = $t.value.length;
// 						sel.moveEnd("character", wee + t);
// 						t <= 0 ? sel.moveStart("character", wee - 2 * t - myValue.length) : sel.moveStart("character", wee - t - myValue.length);
// 						sel.select();
// 					}
// 				} else if ($t.selectionStart || $t.selectionStart == '0') {
// 					var startPos = $t.selectionStart;
// 					var endPos = $t.selectionEnd;
// 					var scrollTop = $t.scrollTop;
// 					$t.value = $t.value.substring(0, startPos) + myValue + $t.value.substring(endPos, $t.value.length);
// 					this.focus();
// 					$t.selectionStart = startPos + myValue.length;
// 					$t.selectionEnd = startPos + myValue.length;
// 					$t.scrollTop = scrollTop;
// 					if (arguments.length == 2) {
// 						$t.setSelectionRange(startPos - t,
// 							$t.selectionEnd + t);
// 						this.focus();
// 					}
// 				} else {
// 					this.value += myValue;
// 					this.focus();
// 				}
// 			}
// 		})
// 	})(jQuery);
// 	/* 在textarea处插入文本--Ending */
// });

// //在输入框光标位置插入选择的内容
// $(".cpt_table").on("click","td",function(){
// 	var text=$(this).html();
// 	$("#cpt_t").insertContent(text);
// 	figures();   
// 	$(".str_tgl").trigger('click');
// })

// //点击发表吐槽

// $(".cpt_send").click(function() {
// 	var textareaValue=$("#cpt_t").val();
// 	if(textareaValue==""){
// 		alert("输入内容不能为空")
// 	}else{
// 		sengNews();				//点击发送的页面样式变化
// 		picMouse();				//开启图案跟随
// 		tucaoAds();				//选定了吐槽的位置
		
// 	}
	
// });
// function sengNews(){
// 	$(".page_size").css("background","#eb862d");
// 	$(".page_size>img").css("opacity","0.6");
// 	$("#complaints_ads").fadeIn(100);
// 	setTimeout(function(){
// 		$("#complaints_ads").fadeOut(100);
// 	}, 1500);
// 	$("#complaints").fadeOut(100);
// 	$("#cpt_t").val("");
// 	$("#footer").off("mouseenter");
// }

// //鼠标的跟随图案
// function picMouse(){
// 	$(document).mousemove(function() {
// 	  var pos=getMousePos(event);
// 	  var divFly=document.getElementById("fly");
// 	   divFly.style.left = pos.x+5+"px"; 
// 	   divFly.style.top = pos.y+"px"; 
// 	  //console.log("x"+pos.x+"y"+pos.y);
// 	})
// }

// function getMousePos(event) {
//     var e = event || window.event;
//     var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
//     var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
//     var x = e.pageX || e.clientX + scrollX;
//     var y = e.pageY || e.clientY + scrollY;
//     return { 'x': x, 'y': y };
// }

// //点击了图片上选定吐槽的位置
// function tucaoAds() {
// 	$("#content").on("click", ".page_size", function(event) {
// 		var index = $(this).index();
// 		//var content=figures();
// 		var parentDom=$(".page_size").eq(index);
// 		var event = event || window.event;
// 		var x = event.offsetX;
// 		var y = event.offsetY;
// 		//console.log("X coords: " + x + ", Y coords: " + y + "index" + index);
// 		parentDom.append("<p style='position:absolute;left:"+x+"px;top:"+y+"px;'>"+textVal+"</p>");
// 		var lastP=$(this).find("p:last");
// 		//widthJudge(lastP);
// 		var pw=lastP.width()+20;
// 		var ph=lastP.height()+20;
// 		if(x+pw>$(this).width()){
// 			console.log("宽度超过了");
// 		}else if(y+ph>$(this).height()){
// 			console.log("高度超过了");
// 		}else{
// 			console.log("那就是没有超");
// 		}
// 	});
// }


