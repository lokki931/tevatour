function moveElements() {
    var domWidth = $(window).width();
    if (domWidth < 910) {
        $("#main-menu>*").appendTo(".mobile__menu-item");
        $(".header-box>*").appendTo(".mobile__menu-box");
    } else {
        $(".mobile__menu-item>*").appendTo("#main-menu");
        $(".mobile__menu-box>*").appendTo(".header-box");
    }
}
moveElements();
$(function() {
    moveElements();
    $(window).resize(function() {
        moveElements();
    });
    $(".mobile_btn").click(function() {
        $(".mobile__menu").addClass('active');
    })

    $(".close__btn").click(function() {
        $(".mobile__menu").removeClass('active');
    })
    $(".slider-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".slider-nav"
    });
    $(".slider-nav").slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 5,
        centerPadding: "44px",
        adaptiveHeight: true,
        slidesToScroll: 1,
        asNavFor: ".slider-for",
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        prevArrow: "<i class='icon-up-open'></i>",
        nextArrow: "<i class='icon-down-open'></i>",
        responsive: [{
                breakpoint: 910,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                    slidesToShow: 3,
                    adaptiveHeight: false,
                    arrows: false,
                    centerPadding: "0px"
                }
            },
            {
                breakpoint: 590,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                    slidesToShow: 2,
                    adaptiveHeight: false,
                    arrows: false,
                    centerPadding: "0px"
                }
            },
            {
                breakpoint: 500,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                    slidesToShow: 1,
                    adaptiveHeight: false,
                    arrows: false,
                    centerPadding: "0px"
                }
            }
        ]
    });
    $(".cat-slider__row").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: "<a href='' class='icon-up-open'></a>",
        nextArrow: "<a href='' class='icon-down-open'></a>",
        responsive: [{
                breakpoint: 910,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 655,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 490,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $("ul.tabs__caption").on("click", "li:not(.active)", function() {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active")
            .closest("div.tabs")
            .find("div.tabs__content")
            .removeClass("active")
            .eq($(this).index())
            .addClass("active");
    });

});