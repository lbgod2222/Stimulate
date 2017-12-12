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
    })

    // immediately action area
    mainPageAnim();
});