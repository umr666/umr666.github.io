/**
 * Created by 111 on 2017/2/7.
 */
$(function () {
    $(".title").find("span").hover(function () {
        $(this).stop().animate({
            "backgroundPositionY":-22,
            "backgroundColor":"#FE0000"
        })
    }, function () {
        $(this).stop().animate({
            "backgroundPositionY":3,
            "backgroundColor":"#212121"
        })
    });
    var index= 1,index2= 1,index3=1;//移动页数
    function move(lenght,ele,i){//移动函数
        if(i==1){
            if(!ele.is(":animated")){
                index++;
                if(index==lenght-1){
                    ele.css("left",0);
                    index=1;
                    go(ele,i);
                }else{
                    go(ele,i);
                }
            }

        }else if(i==2){
            if(!ele.is(":animated")){
                index2++;
                if(index2==lenght-1){
                    ele.css("left",0);
                    index2=1;
                    go(ele,i);
                }else{
                    go(ele,i);
                }
            }

        }else{
            if(!ele.is(":animated")){
                index3++;
                if(index3==lenght-1){
                    ele.css("left",0);
                    index3=1;
                    go(ele,i);
                }else{
                    go(ele,i);
                }
            }

        }
    }
    function go(ele,i){//走到index所在的位置
        if(i==1){
                var left=index*-1200;
                ele.stop().animate({
                    left:left
                });
        }else if(i==2){
                var left=index2*-1200;
                ele.stop().animate({
                    left:left
                });
        }else{
                var left=index3*-1200;
                ele.stop().animate({
                    left:left
                });
        }

    }

    function prev(ele,i){//移动到前一页
        if(i==1){
            if(!ele.is(":animated")){
                index--;
                if(index==0){
                    ele.css("left","-7200px");
                    index=5;
                    go(ele,i);
                }else{
                    go(ele,i);
                }
            }

        }else if(i==2){
            if(!ele.is(":animated")){
                index2--;
                if(index2==0){
                    ele.css("left","-4800px");
                    index2=3;
                    go(ele,i);
                }else{
                    go(ele,i);
                }
            }

        }else{
            if(!ele.is(":animated")){
                index3--;
                if(index3==0){
                    ele.css("left","-3600px");
                    index3=2;
                    go(ele,i);
                }else{
                    go(ele,i);
                }
            }
        }

    }
    var timer1=setInterval(function () {
        move(7,$("#l1 ul"),1);
    },4000)
    $("#box1").hover(function () {
        clearInterval(timer1);
    }, function () {
        clearInterval(timer1);
        timer1=setInterval(function () {
            move(7,$("#l1 ul"),1);
        },4000);
    })
    var timer2=setInterval(function () {
        move(5,$("#l2 ul"),2);
    },4000)
    $("#box2").hover(function () {
        clearInterval(timer2);
    }, function () {
        clearInterval(timer2);
        timer2=setInterval(function () {
            move(5,$("#l2 ul"),2);
        },4000);
    })
    var timer3=setInterval(function () {
        move(4,$("#l3 ul"),3)
    },4000)
    $("#box3").hover(function () {
        clearInterval(timer3);
    }, function () {
        clearInterval(timer3);
        timer3=setInterval(function () {
            move(4,$("#l3 ul"),3)
        },4000);
    })
    $("#right1").on("click", function () {
        move(7,$("#l1 ul"),1);
    })

    $("#left1").on("click", function () {
        prev($("#l1 ul"),1);
    })
    $("#right2").on("click", function () {
        move(5,$("#l2 ul"),2);
    })
    $("#left2").on("click", function () {
        prev($("#l2 ul"),2);
    })
    $("#right3").on("click", function () {
        move(4,$("#l3 ul"),3)
    })
    $("#left3").on("click", function () {
        prev($("#l3 ul"),3)
    })

    $("#l1 ul li").hover(function () {
        $(this).find(".info").stop().slideDown();
    }, function () {
        $(this).find(".info").stop().slideUp();
    });
    $("#l2 ul li").hover(function () {
        $(this).find(".info").stop().slideDown();
    }, function () {
        $(this).find(".info").stop().slideUp();
    });
    $("#l3 ul li").hover(function () {
        //$(this).find(".movie").find("a").stop().animate({
        //    "backgroundColor":"#FE0000"
        //});
        $(this).find(".movie").find("a").css({
            "backgroundColor":"#FE0000"
        }).find("span").css("backgroundImage","url('images/play.fw.png')");
    }, function () {
        $(this).find(".movie").find("a").css({
            "backgroundColor":"#414141"
        }).find("span").css("backgroundImage","url('images/play.png')");
    });

})