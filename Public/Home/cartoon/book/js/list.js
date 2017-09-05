

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
var nowTemp = new Date();var date1,date2;
var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
var checkin = $('#dpd1').fdatepicker({
    format: 'yyyy-mm-dd',
    startDate:-Infinity,
    endDate:Infinity,
    onRender: function (date) {
        return date.valueOf() < now.valueOf() ? 'disabled' : '';
    }

}).on('changeDate', function (ev) {
     date1 = Date.parse($("#dpd1").val().replace(/-/g,"/"))/1000;
    if (ev.date.valueOf() > checkout.date.valueOf()) {
        var newDate = new Date(ev.date);
        newDate.setDate(newDate.getDate() + 1);
        checkout.update(newDate);

    }
    checkin.hide();
    $('#dpd2')[0].focus();
}).data('datepicker');
var checkout = $('#dpd2').fdatepicker({
    format: 'yyyy-mm-dd',
    onRender: function (date) {
        return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
    }
}).on('changeDate', function (ev) {
     date2 = Date.parse($("#dpd2").val().replace(/-/g,"/"))/1000;
    checkout.hide();

}).data('datepicker');
//搜索内容提交
$("#sumbit").click(function(){
    var str=$("#autor_n").val();
    str=replaceIllegalStr(str);
    $("#dpd1").val(date1);
    $("#dpd2").val(date2);
    $("#autor_n").val(str);

});