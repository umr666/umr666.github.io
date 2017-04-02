$(function () {
    //获取地理位置
    // var latitude=0,longitude=0;
    // function getLocation() {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(showPosition,function(){
    //             console.log('失败');
    //         });
    //     } else {
    //         console.log('失败');
    //     }
    // }

    // function showPosition(position) {
    //     console.log('asd');
    //     latitude=position.coords.latitude;
    //     longitude=position.coords.longitude;
    // }

    // getLocation();

    // console.log(latitude+','+longitude);

    //ajax请求数据
    function getDataByGps() {
        $.ajax({
            url: 'http://v.juhe.cn/weather/geo?format=2&key=3d952efb34dbe83dd12c6714ba05f5e2&lon=116&lat=40',
            type: 'get',
            dataType: 'jsonp',
            success: function (data) {

                data.result.future.forEach(function (key, i) {
                    key.date = dateTo(key.date);
                });

                var result = template('template-header', data);
                $('.header').append(result);

                // console.log(data.result.future[0].week);
                result = template('template-tab', data);
                $('.tabs-ul').append(result);

                result = template('template-item', data);
                $('.tabs-bottom').append(result);
            }
        })
    }

    getDataByGps();




    //标签页拖动
    var moveUl = $('.tabs-ul');
    var startX = 0; //开始位置
    var moveX = 0; //移动距离
    var distanceX = 0; //上次移动到的位置
    var delay = 50; //缓冲区
    var max = 0; //拖动最大值
    var min = $('body').width() - moveUl.width(); //拖动最小值
    moveUl.on('touchstart', function (event) {
        // console.log(event.originalEvent.touches[0].clientX);
        startX = event.originalEvent.touches[0].clientX;
        moveUl.css('transition', 'none');

    })

    moveUl.on('touchmove', function (event) {
        moveX = event.originalEvent.touches[0].clientX - startX;
        var currentMove = moveX + distanceX;
        if (currentMove > (max + delay)) {
            currentMove = max + delay;
        } else if (currentMove < (min - delay)) {
            currentMove = min - delay;
        }
        moveUl.css('transform', 'translateX(' + currentMove + 'px)');
    })

    moveUl.on('touchend', function (event) {
        distanceX += moveX;
        moveUl.css('transition', 'all .5s');
        if (distanceX > max) {
            distanceX = max;
        } else if (distanceX < min) {
            distanceX = min;
        }
        // moveX=0;
        moveUl.css('transform', 'translateX(' + distanceX + 'px)');
    })
})