/**
 * Created by mzc18 on 2017/2/7.
 */
$(function(){
    //¼ò½é
    $("#nav>li:eq(1)").on("mouseenter",function(){
        //$(this).children("ul").stop().slideDown(300);
        $(this).children("ul").stop().animate({"opacity":"1","top":"54"},500).css("display","block");
    })
    $("#nav>li:eq(1)").on("mouseleave",function(){
        //$(this).children("ul").stop().slideUp(300);
        $(this).children("ul").stop().animate({"opacity":"0","top":"64"},500);
    })
    $("#nav>li:eq(1)>ul").on("mouseleave",function(){
        $(this).stop().css("display","none");
    })


    //ÂÃÅÄµê¼Ò
    $("#nav>li:eq(6)").hover(function(){
        //$(this).children("ul").stop().slideDown(300);
        $(this).children("ul").stop().animate({"opacity":"1","top":"54"},500).css("display","block");
    },function(){
        //$(this).children("ul").stop().slideUp(300);
        $(this).children("ul").stop().animate({"opacity":"0","top":"64"},500);
    })
    $("#nav>li:eq(6)>ul").on("mouseleave",function(){
        $(this).stop().css("display","none");
    })
})
