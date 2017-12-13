// Main logic of KMW project
//  params
var isCountinue = true;
// scroll status
// var featurePageOffset = $('#featurePage');
// var mainPageOffset = $('#mainPage').offset();
// var visionPageOffset = $('#visionPage').offset();
// var applyPageOffset = $('#applyPage').offset();
// var teamPageOffset = $('#teamPage').offset();
// var footerPageOffset = $('#footerPage').offset();

$(document).ready(function(event, target){
    // params
    var featurePageOffset = $('#featurePage').offset().top;
    var mainPageOffset = $('#mainPage').offset().top;
    var visionPageOffset = $('#visionPage').offset().top;
    var applyPageOffset = $('#applyPage').offset().top;
    var teamPageOffset = $('#teamPage').offset().top;
    var footerPageOffset = $('#footerPage').offset().top;

    console.log(featurePageOffset, mainPageOffset, visionPageOffset, applyPageOffset, footerPageOffset);

    // Scroll  headerbar color reflection
    //
    //
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
    // header list item change color depend on scrollheight
    $(window).scroll(function(e){
        var headerScroll = $(window).scrollTop();
        var navList = $('.header_list li');
        $.each(navList, function(){
            $(this).removeClass('header_list_active');
        });
        if (headerScroll >= featurePageOffset && headerScroll<visionPageOffset) {
            $('.header_list li:nth-child(2)').addClass('header_list_active');
        }
        if (headerScroll >= visionPageOffset && headerScroll<applyPageOffset) {
            $('.header_list li:nth-child(3)').addClass('header_list_active');
        }
        if (headerScroll >= applyPageOffset && headerScroll<teamPageOffset) {
            $('.header_list li:nth-child(4)').addClass('header_list_active');
        }
        if (headerScroll >= teamPageOffset && headerScroll<footerPageOffset) {
            $('.header_list li:nth-child(5)').addClass('header_list_active');
        }
        if (headerScroll >= footerPageOffset) {
            $('.header_list li:nth-child(6)').addClass('header_list_active');
        } else if (headerScroll<featurePageOffset) {
            $('.header_list li:nth-child(1)').addClass('header_list_active');
        }
    })
    // header bar scroll to
    //
    //
    $('.header_list li').bind('click', function(){
        console.log($(this).find('a')[0].hash);
        // console.log(featurePageOffset, mainPageOffset, visionPageOffset, applyPageOffset, footerPageOffset);
        // $('body, html').animate({scrollTop:$(this).offset().top}, 800);
        $.scrollTo($(this).find('a')[0].hash, 300)
        var navList = $('.header_list li');
        $.each(navList, function(){
            $(this).removeClass('header_list_active');
        });
        $(this).addClass('header_list_active');
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
        console.log('ACTIvE MOUSEWHEEL');
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
        // scrollAction effect the page rolling
        // var
    });

    // 3d movement
    //
    //
    $('.featurePage_trigger').bind('mouseenter',function(e){
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
        var axis_x = $('.featurePage_trigger').width()/2;
        var axis_y = $('.featurePage_trigger').height()/2;
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
    // slide boxes
    //
    //
    // $(document).ready(function(event, target){
    $(".applyPage_list_container>div").on('mouseenter', function(e){
        //  console.log($(this).prev().prev());
        var leftNum = 1;
        var rightNum = 1;
        var leftAddClass = function(context) {
            var preTar = context.prev();
            if (preTar.length !== 0) {
                preTar.removeClass('applyPage_l1_left applyPage_l2_left applyPage_l3_left applyPage_l4_left applyPage_l5_left applyPage_l6_left applyPage_l1_right applyPage_l2_right applyPage_l3_right applyPage_l4_right applyPage_l5_right applyPage_l6_right applyPage_active');
                preTar.addClass("applyPage_l" + leftNum + "_left");
                leftNum += 1;
                leftAddClass(context.prev());
            } else {
                return;
            }
        }
        var rightAddClass = function(context) {
            var nextTar = context.next();
            if (nextTar.length !== 0) {
                nextTar.removeClass('applyPage_l1_left applyPage_l2_left applyPage_l3_left applyPage_l4_left applyPage_l5_left applyPage_l6_left applyPage_l1_right applyPage_l2_right applyPage_l3_right applyPage_l4_right applyPage_l5_right applyPage_l6_right applyPage_active');
                nextTar.addClass("applyPage_l" + rightNum + "_right");
                rightNum += 1;
                rightAddClass(context.next());
            } else {
                return;
            }
        }
        $(this).removeClass('applyPage_l1_left applyPage_l2_left applyPage_l3_left applyPage_l4_left applyPage_l5_left applyPage_l6_left applyPage_l1_right applyPage_l2_right applyPage_l3_right applyPage_l4_right applyPage_l5_right applyPage_l6_right applyPage_active');
        $(this).addClass('applyPage_active');
        leftAddClass($(this));
        rightAddClass($(this));

        console.log($(this).prev());
    })
    $(".applyPage_list_container").on('mouseout', function(e){
        e.stopPropagation();
        $(".applyPage_list_container>div:nth-child(1)").removeClass().addClass('applyPage_l3_left applyPage_item');
        $(".applyPage_list_container>div:nth-child(2)").removeClass().addClass('applyPage_l2_left applyPage_item');
        $(".applyPage_list_container>div:nth-child(3)").removeClass().addClass('applyPage_l1_left applyPage_item');
        $(".applyPage_list_container>div:nth-child(4)").removeClass().addClass('applyPage_active applyPage_item');
        $(".applyPage_list_container>div:nth-child(5)").removeClass().addClass('applyPage_l1_right applyPage_item');
        $(".applyPage_list_container>div:nth-child(6)").removeClass().addClass('applyPage_l2_right applyPage_item');
    })
    // });
    // immediately action area
    mainPageAnim();
});