
$(document).ready(function(){
    $("#footer").load('../data/footer.html')
});

$(function(){
    var url=window.location.href;	  //获取当前页面的url
    var len=url.length;   //获取url的长度值
    var a=url.indexOf("?");   //获取第一次出现？的位置下标
    var b=url.substr(a+1,len);   //截取问号之后的内容
    var c=b.split("&");   //从指定的地方将字符串分割成字符串数组
    var arr=new Array();  //新建一个数组
    for(var i=0;i<c.length;i++){
        var d=c[i].split("=")[1]; //从=处将字符串分割成字符串数组,并选择第2个元素
        arr.push(d);	 //将获取的元素存入到数组中
    }
    return arr
});
alert(arr);
