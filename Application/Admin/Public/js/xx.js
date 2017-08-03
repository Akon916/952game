var id;
$("#d1").on('mouseover','span',function(){
     id=$(this).index();
    switch (id<=4){
        case id==0:
            $(this).addClass('col');
            $(this).siblings().removeClass('col');
            break;
        case id==1:
            $(this).siblings().removeClass('col');
            $(this).addClass('col');
            $("#d1>span:lt(1)").addClass('col');
            break;
        case id==2:
            $(this).siblings().removeClass('col');
            $(this).addClass('col');
            $("#d1>span:lt(2)").addClass('col');
            break;
        case id==3:
            $(this).siblings().removeClass('col');
            $(this).addClass('col');
            $("#d1>span:lt(3)").addClass('col');
            break;
        case id==4:
            $(this).siblings().removeClass('col');
            $(this).addClass('col');
            $("#d1>span:lt(4)").addClass('col');
            break;
    }
}).click(function(){
    var star=id+1;//输出是第几颗星星
    $("#game_recommend").val(star);
});
$(document).ready(function () {
    var index=$("#game_recommend").val();
    aa(index);
});
function aa(index) {
    id=index;
    switch (id<=4){
        case id==0:
            $(this).addClass('col');
            $(this).siblings().removeClass('col');
            break;
        case id==1:
            $(this).siblings().removeClass('col');
            $(this).addClass('col');
            $("#d1>span:lt(1)").addClass('col');
            break;
        case id==2:
            $(this).siblings().removeClass('col');
            $(this).addClass('col');
            $("#d1>span:lt(2)").addClass('col');
            break;
        case id==3:
            $(this).siblings().removeClass('col');
            $(this).addClass('col');
            $("#d1>span:lt(3)").addClass('col');
            break;
        case id==4:
            $(this).siblings().removeClass('col');
            $(this).addClass('col');
            $("#d1>span:lt(4)").addClass('col');
            break;
    }
}