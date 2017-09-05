

//搜索框的过滤
function replaceIllegalStr(str) {
    var reg;
    var illegal_list = ["/", "\\",
        "[", "]",
        "{", "}",
        "<", ">",
        "＜", "＞",
        "「", "」",
        "：", "；",
        "、", "•",
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
//双时间选择器（插件）
var startDate = new Date();
var endDate = new Date();
$('#dpd1').fdatepicker({
    format: 'yyyy/mm/dd'
})
    .on('changeDate', function (ev) {
        if (ev.date.valueOf() > endDate.valueOf()) {
            alert("您选取的时间顺序不对，请重新选择！");
            $('#dpd2').val("");
        } else {
            startDate = new Date(ev.date);
        }
        $('#dpd1').fdatepicker('hide');
    });
$('#dpd2').fdatepicker({
    format: 'yyyy/mm/dd'
}).on('changeDate', function (ev) {
    if(ev.date.valueOf() < startDate.valueOf()){
        alert("您选取的时间顺序不对，请重新选择！");
        $('#dpd2').val("");
    }else{
        endDate = new Date(ev.date);
    }
    $('#dpd2').fdatepicker('hide');
});
//搜索内容提交
$("#sumbit").click(function(){
    var str=$("#autor_n").val();
    str=replaceIllegalStr(str);
    var date1=$("#dpd1").val();
    var date2=$("#dpd2").val();
    date1 = new Date(Date.parse(date1.replace(/-/g, "/")));
    date1 = date1.getTime()/1000;
    date2 = new Date(Date.parse(date2.replace(/-/g, "/")));
    date2 = date2.getTime()/1000;
    $("#dpd1").val(date1);
    $("#dpd2").val(date2);
    $("#autor_n").val(str);
});