$(window).on('load', function () {
    $(".loader").delay(2000).fadeOut("slow");
    $("#overlayer").delay(2600).fadeOut("slow");
});


function cssVarInit() {

    var navHeight = $(".navbar").height();
    document.body.style.setProperty('--navbarHeight', navHeight + 'px'); //set

    var productImageWidth = $('main .banner .product_image').width();

    document.body.style.setProperty('--mainBannerImageWidth', productImageWidth + 'px'); //set

    $(window).on("orientationchange", function (event) {
        document.body.style.setProperty('--mainBannerImageWidth', productImageWidth + 'px'); //set
    });

}

$(document).ready(function () {

    
    cssVarInit();

    $(window).on("orientationchange", function (event) {
        cssVarInit();
    });


    function autoScroll() {

        $("html, body").animate({
            scrollTop: ($(document).height() - $(window).scrollTop())
        }, 50000);
    }


    $('.autoScroll.btn').click(function () {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {

            $("html, body").animate({
                scrollTop: $(document).height()
            }, 20000);

        } else if ($(window).scrollTop() + $(window).height() == $(document).height()) {

            $('.autoScroll.btn').removeClass('active');

            $("html, body").animate({
                scrollTop: 0
            }, 200);

        } else {
            $("html, body").stop().animate({
                scrollTop: $(window).position()
            }, 0);
        }
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {

            if ($('.autoScroll.btn').hasClass('active')) {
                $('.autoScroll.btn').removeClass('active');

                $("html, body").animate({
                    scrollTop: 0
                }, 200);
            }


        }
    });



    //variables
    var containerMl = $(".container").offset().left;

    //custom
    $(".main_btn").click(function () {
        $("section#landing").addClass("unveil");

        if ($('section#landing').hasClass('unveil')) {
            $('.btn.autoScroll').fadeIn();
        }

    });

    $('.btn.autoScroll').hide();


    $("button.navbar-toggler").click(function () {
        $(this).toggleClass("change");
    });



    $("main .our-products .slider-wrap").css("margin-left", containerMl)

    //sliders
    $(".banner .slider").slick({
        arrows: false,
        dots: true,
        autoplay: true

    });

    $("main .our-products .slider").slick({
        arrows: true,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        loop: true,
        autoplay: true,
        prevArrow: $('.our-products .arrow-left'),
        nextArrow: $('.our-products .arrow-right'),

        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // $('main .our-products .arrow-left').click(function () {
    //     $('.slider').slick('slickPrev');
    //     alert(hi);
    // })

    // $('main .our-products .arrow-right').click(function () {
    //     $('.slider').slick('slickNext');
    // })


});