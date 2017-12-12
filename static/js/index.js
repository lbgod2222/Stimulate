// Main logic of KMW project
//  params
var isCountinue = true;

$(document).ready(function(event, target){
    // Scroll bar color reflection
    $(window).scroll(function(event){
        var headerScroll = $(window).scrollTop();
        if (headerScroll > 55) {
            if (!$('#prime').hasClass('prime_scroll')) {
                $('#prime').addClass('prime_scroll');
            } else {
                return;
            }
        } else {
            if (!$('#prime').hasClass('prime_scroll')) {
                return;
            } else {
                $('#prime').removeClass('prime_scroll');
            }
        }
    });

    // Main page animation
    function mainPageAnim() {
        var layer1 = $('.mainPage_content_layer2');
        var layer2 = $('.mainPage_content_layer1');
        var layer3 = $('.mainPage_content_layer3');

        layer1.removeClass('disappear');
        layer1.css('top', '0');
        setTimeout(() => {
            layer2.removeClass('disappear');
            layer2.css('top', '0');
        }, 400);
        setTimeout(() => {
            layer3.removeClass('disappear');
            layer3.css('top', '0');
        }, 800);
    }

    // bind scroll action
    $(window).bind('mousewheel', function(event, delta, deltaX, deltaY) {
        // PREVENT TO DUMPLICATED FUNCTION 
        // PARAMS
        if (!isCountinue) {
            return;
        }
        console.log('ACTICE MOUSEWHEEL');
        // scroll down, delta for -1,scroll up, delta for 1
        var mainPageScroll = $(window).scrollTop();
        var mainPageHeight = $('#mainPage').height();
        if (mainPageScroll < mainPageHeight - 10) {
            console.log(deltaY);
            if (deltaY < 0 && isCountinue) {
                isCountinue = false;
                $('body, html').animate({scrollTop:$('#featurePage').offset().top}, 800);
                setTimeout(() => {
                    isCountinue = true;
                }, 800);
                // $(window).scrollTop(mainPageHeight);
            }
        }
        // console.log($('#mainPage').height());
    });

    // 3d movement
    $('.featurePage_bg2').bind('mouseenter',function(e){
        mouseIn();
    }).bind('mousemove',function(e){
        // Mouse(e);
        MouseEvent(e);
    }).bind('mouseleave',function(){
        mouseOut();
    });
    //获取鼠标坐标函数
    // rotateX: +— 8    routateY：+-2.6deg
    var MouseEvent = function(e) {
        e.preventDefault(); 
        var off_x = e.offsetX;
        var off_y = e.offsetY;
        // calculate the timely style changes
        var axis_x = $('.featurePage_bg2').width()/2;
        var axis_y = $('.featurePage_bg2').height()/2;
        animX = (((off_x - axis_x) / axis_x) * 8) + 'deg';
        animY = (((axis_y - off_y) / axis_y) * 6.6) + 'deg';
        console.log(animX, ',', animY);
        $('.featurePage_bg2').css("transform", "translateZ(20px)");
        // console.log(container_z);
        // $('.banner_3d').css(rotateX:''+animX, rotateY:''+animY);
        $('.featurePage_bg2').css("transform", "rotateX("+animY+") rotateY("+animX+")");
        // $('.banner_3d_list').css("color","red");
        // $('.banner_3d_list').css('rotateY', animY);
        // shadow: input1 : +- 45(right shadow)  input2: +- 20(bottom shadow)
        shadowX = (((off_x - axis_x) / axis_x) * -45) + 'px';
        shadowY = (((axis_y - off_y) / axis_y) * 20) + 'px';
        // $('.shadow').css("transform", "translate3d("+shadowX+","+shadowY+",0)");
    }
    var mouseOut = function() {
        // $('.banner_3d_list').css("color","blue");
        $('.featurePage_bg2').css("transition", "all .3s ease-in-out");
        setTimeout(() => {
            $('.featurePage_bg2').css("transform", "rotateX(0deg) rotateY(0deg)");
            $('.featurePage_bg2').css("transform", "translateZ(0px)");
            // $('.shadow').css("transform", "translate3d(0,0,0)");
            // $('.shadow').css("display", "none");
            // $('.shadow').css("opacity", "0");
        }, 100);
    }
    var mouseIn = function() {
        $('.featurePage_bg2').css("transition", "transform 0.3s ease 0");
        setTimeout(() => {
            $('.featurePage_bg2').css("transition", "transform 0s");
            // $('.shadow').css("display", "block");
            // $('.shadow').css("opacity", "1");
        }, 300);
    }

    // immediately action area
    mainPageAnim();
});