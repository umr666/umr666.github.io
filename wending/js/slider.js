/**
 * Created by mzc18 on 2017/2/7.
 */
$(function(){
     var nowing =0;//����һ������������ͼƬ����ʾ
    var timer = null;//����һ����ʱ��
    //����һ���Զ����ŵĺ���
    function autoplay(){
        if(nowing < $(".slider .slider-ul li").length-1){
            //���ڲ��ŵ�ͼƬ������һ�ֵ�++�������С��length-1,��˵���Ѿ������һ�ţ���ʱҪ���ŵ�һ�ţ����С�ڣ������������һ��
            nowing++;
        }else {
            nowing = 0;
        }
        if(nowing == 0){
            $(".slider .slider-ul li").eq($(".slider .slider-ul li").length-1).animate({"opacity":0},4000);//�������һ��Ԫ��
            $(".slider .slider-ul li").eq(nowing).animate({"opacity":1},4000);
        }else{
            $(".slider .slider-ul li").eq(nowing-1).animate({"opacity":0},4000);
            $(".slider .slider-ul li").eq(nowing).animate({"opacity":1},4000);
        }
        //СԲ���ͬ��
        $(".circle ul li").eq(nowing).addClass("current").siblings().removeClass("current");
    }
    //���ö�ʱ����ʱ����
    timer = setInterval(autoplay,4000)

    //�������ʱ����ʾ���Ұ�ť
    $(".slider").on("mouseenter",function(){
        $(".arrow").css("display","block");
        clearInterval(timer);//�����ʱ����
    })
    //����뿪��ʱ���������Ұ�ť
    $(".slider").on("mouseleave",function(){
        $(".arrow").css("display","none");
        timer = setInterval(autoplay,4000);
    })

    //������Ұ�ť��ʱ����¼�
    //�Ұ�ť
    $(".arrow-r").on("click",function(){
        if(nowing < $(".slider .slider-ul li").length-1){
            //���ڲ��ŵ�ͼƬ������һ�ֵ�++�������С��length-1,��˵���Ѿ������һ�ţ���ʱҪ���ŵ�һ�ţ����С�ڣ������������һ��
            nowing++;
        }else {
            nowing = 0;
        }
        if(nowing == 0){
            $(".slider .slider-ul li").eq($(".slider .slider-ul li").length-1).animate({"opacity":0},800);//�������һ��Ԫ��
            $(".slider .slider-ul li").eq(nowing).animate({"opacity":1},800);
        }else{
            $(".slider .slider-ul li").eq(nowing-1).animate({"opacity":0},800);
            $(".slider .slider-ul li").eq(nowing).animate({"opacity":1},800);
        }
        //СԲ���ͬ��
        $(".circle ul li").eq(nowing).addClass("current").siblings().removeClass("current");
    })
    //��ť
    $(".arrow-l").on("click",function(){
        if(nowing>0){
            nowing--;
        }else{
            nowing = $(".slider .slider-ul li").length-1;
        }
        if(nowing == $(".slider .slider-ul li").length-1){
            $(".slider .slider-ul li").eq(0).animate({"opacity":0},800);//���ص�һ��Ԫ��
            $(".slider .slider-ul li").eq(nowing).animate({"opacity":1},800);
        }else{
            $(".slider .slider-ul li").eq(nowing+1).animate(
                {"opacity":0},800
            );
            $(".slider .slider-ul li").eq(nowing).animate(
                {"opacity":1},800
            )
        }
        //СԲ��ı仯
        $(".circle ul li ").eq(nowing).addClass("current").siblings().removeClass("current");
    })

})