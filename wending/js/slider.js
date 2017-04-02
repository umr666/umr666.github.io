/**
 * Created by mzc18 on 2017/2/7.
 */
$(function(){
     var nowing =0;//定义一个变量来控制图片的显示
    var timer = null;//定义一个定时器
    //定义一个自动播放的函数
    function autoplay(){
        if(nowing < $(".slider .slider-ul li").length-1){
            //正在播放的图片经过上一轮的++后如果不小于length-1,就说明已经是最后一张，这时要播放第一张；如果小于，则继续播放下一张
            nowing++;
        }else {
            nowing = 0;
        }
        if(nowing == 0){
            $(".slider .slider-ul li").eq($(".slider .slider-ul li").length-1).animate({"opacity":0},4000);//隐藏最后一个元素
            $(".slider .slider-ul li").eq(nowing).animate({"opacity":1},4000);
        }else{
            $(".slider .slider-ul li").eq(nowing-1).animate({"opacity":0},4000);
            $(".slider .slider-ul li").eq(nowing).animate({"opacity":1},4000);
        }
        //小圆点的同步
        $(".circle ul li").eq(nowing).addClass("current").siblings().removeClass("current");
    }
    //设置定时器定时播放
    timer = setInterval(autoplay,4000)

    //鼠标进入的时候显示左右按钮
    $(".slider").on("mouseenter",function(){
        $(".arrow").css("display","block");
        clearInterval(timer);//清除定时播放
    })
    //鼠标离开的时候隐藏左右按钮
    $(".slider").on("mouseleave",function(){
        $(".arrow").css("display","none");
        timer = setInterval(autoplay,4000);
    })

    //点击左右按钮的时候的事件
    //右按钮
    $(".arrow-r").on("click",function(){
        if(nowing < $(".slider .slider-ul li").length-1){
            //正在播放的图片经过上一轮的++后如果不小于length-1,就说明已经是最后一张，这时要播放第一张；如果小于，则继续播放下一张
            nowing++;
        }else {
            nowing = 0;
        }
        if(nowing == 0){
            $(".slider .slider-ul li").eq($(".slider .slider-ul li").length-1).animate({"opacity":0},800);//隐藏最后一个元素
            $(".slider .slider-ul li").eq(nowing).animate({"opacity":1},800);
        }else{
            $(".slider .slider-ul li").eq(nowing-1).animate({"opacity":0},800);
            $(".slider .slider-ul li").eq(nowing).animate({"opacity":1},800);
        }
        //小圆点的同步
        $(".circle ul li").eq(nowing).addClass("current").siblings().removeClass("current");
    })
    //左按钮
    $(".arrow-l").on("click",function(){
        if(nowing>0){
            nowing--;
        }else{
            nowing = $(".slider .slider-ul li").length-1;
        }
        if(nowing == $(".slider .slider-ul li").length-1){
            $(".slider .slider-ul li").eq(0).animate({"opacity":0},800);//隐藏第一个元素
            $(".slider .slider-ul li").eq(nowing).animate({"opacity":1},800);
        }else{
            $(".slider .slider-ul li").eq(nowing+1).animate(
                {"opacity":0},800
            );
            $(".slider .slider-ul li").eq(nowing).animate(
                {"opacity":1},800
            )
        }
        //小圆点的变化
        $(".circle ul li ").eq(nowing).addClass("current").siblings().removeClass("current");
    })

})