// Main logic of KMW project
//  params
var isCountinue = true;

$(document).ready(function(event, target){
    // params
    var featurePageOffset = $('#featurePage').offset().top;
    var mainPageOffset = $('#mainPage').offset().top;
    var visionPageOffset = $('#visionPage').offset().top;
    var applyPageOffset = $('#applyPage').offset().top;
    var teamPageOffset = $('#teamPage').offset().top;
    var footerPageOffset = $('#footerPage').offset().top;
    var adPageOffset = $('#adPage').offset().top;

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
    // backtop scroll monitor
    //
    //
    $(window).scroll(function(event){
        var backScroll = $(window).scrollTop();
        if (backScroll > 1000) {
            // if ($('.backTop').hasClass('disappear')) {
            //     $('.backTop').removeClass('disappear');
            // } else {
            //     return;
            // }
            $('.backTop').show();
        } else {
            // if (!$('.backTop').hasClass('disappear')) {
            //     return;
            // } else {
            //     $('.backTop').addClass('disappear');
            // }
            $('.backTop').hide();
        }
    });
    // backtop click monitor
    $('.backTop').bind('click', function() {
        $('body, html').animate({scrollTop:$('#mainPage').offset().top}, 1000);
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
        if (headerScroll >= teamPageOffset && headerScroll<adPageOffset - 245) {
            $('.header_list li:nth-child(5)').addClass('header_list_active');
        }
        if (headerScroll >= adPageOffset-245) {
            $('.header_list li:nth-child(6)').addClass('header_list_active');
        } else if (headerScroll<featurePageOffset) {
            $('.header_list li:nth-child(1)').addClass('header_list_active');
        }
    })
    // header bar scroll to
    //
    //
    $('.header_list li').bind('click', function(){
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
        var layer5 = $('.mainPage_content_layer5');
        var layer6 = $('.mainPage_content_layer6');

        layer1.removeClass('disappear');
        layer1.css('top', '0');
        setTimeout(function(){
            layer2.removeClass('disappear');
            layer2.css('top', '0');
        }, 400);
        setTimeout(function(){
            layer3.removeClass('disappear');
            layer3.css('top', '0');
        }, 800);
        setTimeout(function(){
            layer6.removeClass('disappear');
            layer6.css('top', '0');
        }, 1500);
        setTimeout(function(){
            layer5.removeClass('disappear');
            // layer5.css('top', '0');
            layer5.css('opacity', '1');
        }, 1900);
    }

    // bind scroll action
    $(window).bind('mousewheel', function(event, delta, deltaX, deltaY) {
        // event.preventDefault();
        // PREVENT TO DUMPLICATED FUNCTION 
        // PARAMS
        if (!isCountinue) {
            event.preventDefault();
            return;
        }
        // scroll down, delta for -1,scroll up, delta for 1
        var mainPageScroll = $(window).scrollTop();
        var mainPageHeight = $('#mainPage').height();
        if (mainPageScroll < mainPageHeight - 10) {
            if (deltaY < 0 && isCountinue) {
                isCountinue = false;
                $('body, html').animate({scrollTop:$('#featurePage').offset().top + 50}, 800);
                setTimeout(function(){
                    isCountinue = true;
                }, 800);
                // $(window).scrollTop(mainPageHeight);
            }
        }
        // scrollAction effect the page rolling
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
        $('.featurePage_bg2').css("transform", "translateZ(20px)");
        $('.featurePage_bg2').css("transform", "rotateX("+animY+") rotateY("+animX+")");
        shadowX = (((off_x - axis_x) / axis_x) * -45) + 'px';
        shadowY = (((axis_y - off_y) / axis_y) * 20) + 'px';
    }
    var mouseOut = function() {
        $('.featurePage_bg2').css("transition", "all .3s ease-in-out");
        setTimeout(function(){
            $('.featurePage_bg2').css("transform", "rotateX(0deg) rotateY(0deg)");
            $('.featurePage_bg2').css("transform", "translateZ(0px)");
        }, 100);
    }
    var mouseIn = function() {
        $('.featurePage_bg2').css("transition", "transform 0.3s ease 0");
        setTimeout(function(){
            $('.featurePage_bg2').css("transition", "transform 0s");
        }, 300);
    }
    // slide boxes
    //
    //
    $(".applyPage_list_container>div").on('mouseover', function(e){
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
        // let featureTrigger = setTimeout(() => {
            // console.log('HI timer is on');
            $(this).removeClass('applyPage_l1_left applyPage_l2_left applyPage_l3_left applyPage_l4_left applyPage_l5_left applyPage_l6_left applyPage_l1_right applyPage_l2_right applyPage_l3_right applyPage_l4_right applyPage_l5_right applyPage_l6_right applyPage_active');
            $(this).addClass('applyPage_active');
            leftAddClass($(this));
            rightAddClass($(this));
        // }, 500);
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
    // footer-hover anima
    //
    //
    $('.footerPage_wechat').bind('mouseover', function(){
        $('.footerPage_wechat_float').removeClass('disappear');
    });
    $('.footerPage_wechat').bind('click', function(e){
        e.preventDefault();
    });
    $('.footerPage_wechat').bind('mouseout', function(){
        $('.footerPage_wechat_float').addClass('disappear');
    });
    $('.footerPage_qicq').bind('mouseover', function(e){
        e.stopPropagation();
        $('.footerPage_qicq_float').removeClass('disappear');
    });
    $('.footerPage_qicq').bind('click', function(e){
        e.preventDefault();
    });
    $('.footerPage_qicq').bind('mouseout', function(e){
        e.stopPropagation();
        $('.footerPage_qicq_float').addClass('disappear');
    });
    // un open market link
    //
    //
    $('.footerPage_contact').bind('mouseover', function(e) {
        if (window.flag === 0) {
            $(this).html('尚未开放');
        }
        if (window.flag === 1) {
            $(this).html('ComingSoon');
        }
    });
    $('.footerPage_contact').bind('mouseout', function(e) {
        if (window.flag === 0) {
            $(this).html('进入市场');
        }
        if (window.flag === 1) {
            $(this).html('To markets');
        }
    });
    // disable adPage links
    //
    //
    $('.adPage_list_3 a, .adPage_list_4 a, .adPage_list_5 a').bind('click', function(e) {
        e.preventDefault();
    })
    // immediately action area
    setTimeout(function(){
        mainPageAnim();
    }, 1200);
});