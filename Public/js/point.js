
    $("#header").load('data/header.html');
    $("#footer").load('data/footer.html');

//新闻自动滚动
    jQuery("#main_draw_down").slide({
        mainCell:".main_draw_down_txt ul",
        autoPlay:true,
        effect:"topMarquee",
        vis:10,
        interTime:50
    });

//礼包领取tab切换
    jQuery("#main_three_down_slide").slide({
        titCell:$(".main_slide_rel"), //鼠标触发对象
        targetCell:$(".main_slide_pst"), //与titCell一一对应，第n个titCell控制第n个targetCell的显示隐藏
        effect:"slideDown", //targetCell下拉效果
        delayTime:200 , //效果时间
        triggerTime:0, //鼠标延迟触发时间（默认150）
        defaultPlay:true,//默认是否执行效果（默认true）
        returnDefault:true ,
        defaultIndex:0//鼠标从.sideMen移走后返回默认状态（默认false）
    });