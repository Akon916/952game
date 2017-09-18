$(function(){

//点击添加公告弹出层
var textNum_set=30;
$(".cgnotice-btn").click(function() {
	$("#firstModal").css('display', 'block');
	closeModal();
	numLength(textNum_set);
});
//点击关闭或取消弹出层
function closeModal() {
$(".cancel").click(function() {
	$("#firstModal").css('display', 'none');
	$(".row>textarea").val("");
});
	
}
//计算还可以输入的字数

function numLength(textNum_set){
	
	if ($(".row>textarea").val().length==0) {
		$(".ede").css('display', 'block');
		$(".rde").css('display', 'none');
			}
	$(".row>textarea").keyup(function() {
		var length=$(this).val().length;
			$(".rde").css('display', 'block').prev().hide();

			if (length<=textNum_set) {
				var ede_num=textNum_set-length
				$(".rde").text("还可输入"+ede_num+"个字").css('color', '#333');
				return true
			}else if(length>=textNum_set){
				var rde_num=length-textNum_set;
				$(".rde").text("已超过"+rde_num+"个字").css('color', '#e4393c');
				return false
			}
	})
}	

//表单内容过滤
function replaceIllegalStr(str) {
    var reg;
    var illegal_list = ["/", "\\",
        "[", "]",
        "{", "}",
        "<", ">",
        "＜", "＞",
        "「", "」",
        "^", "'", "\"",
        "\r", "\r\n", "\\n", "\n"];
    for (var i = 0; i < illegal_list.length; i++) {
        if (str.indexOf(illegal_list[i]) >= 0) {
            if (illegal_list[i] == '\\' || illegal_list[i] == '[') {
                reg = new RegExp('\\' + illegal_list[i], "g");
            } else {
                reg = new RegExp(illegal_list[i], "g");
            }
            str = str.replace(reg, '');
        }
    }
    return str.trim();
}


//提交
$("#submit").click(function() {
	var sLength=$(".row>textarea").val().length;
	if (sLength>0 && sLength<=30) {
		var str=$(".row>textarea").val();
	        str=replaceIllegalStr(str);
	        $(".row>textarea").val(str);  	
		$("form").submit()
	}else{
		return false
	}
});


})


