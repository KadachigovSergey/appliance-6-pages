(function ($) {
    $(function () {
        //FOE SLIDER
        var windowWidth = $(window).width(),
            mySlider = $('.slider');
        if (windowWidth <= 991 && windowWidth > 500) {
            $(mySlider).slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000
            });
        } else if (windowWidth <= 500) {
            $(mySlider).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000
            });
        } else {
            $(mySlider).slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000
            });
        }
        //SLIDER END

        //STYLE FOR SELECT
        $('select').styler();


    });
})(jQuery);

//map
(function ($) {
    $(function () {
        $("#map").gMap({
            latitude: 25.7824618,
            longitude: -80.3010444,
            zoom: 12,
            markers:[
                {
                    latitude: 25.761518,
                    longitude: -80.210594,
                    icon: {
                        image: "img/map-marker-blue-min.png",
                        iconsize: [71, 68],
                        iconanchor: [30,60]
                    }
                },
                {
                    latitude: 25.809512,
                    longitude: -80.242609,
                    icon: {
                        image: "img/map-marker-blue-min.png",
                        iconsize: [71, 68],
                        iconanchor: [30,60]
                    }
                },
                {
                    latitude: 25.787044,
                    longitude: -80.379251,
                    icon: {
                        image: "img/map-marker-red-min.png",
                        iconsize: [71, 68],
                        iconanchor: [30,60]
                    }
                }
            ],
            icon: {
                image: "img/map-marker-blue-min.png",
                iconsize: [71, 68],
                iconanchor: [30,60]
            }
        });
    });
})(jQuery);

(function ($) {
    $(function () {
        var inputFile = $('#img'),
            nameImg = $('#for-img'),
            mobileBtn = $('.btn-mobile-menu'),
            mobileMenu = $('.header-nav-menu'),
            sidebarBtn = $('.sidebar-btn'),
            sidebbarBlock = $('.sidebar');

        mobileBtn.on('click', function () {
            $(this).toggleClass('open');
            mobileMenu.toggleClass('open');
        });
        sidebarBtn.on('click', function () {
            $(this).toggleClass('open');
            $(this).next(sidebbarBlock).toggleClass('open');
        });

        inputFile.on('change', function () {

            var arrStr = $(inputFile[0]).val().split("\\");

            if (arrStr[arrStr.length - 1]) {
                nameImg.text(arrStr[arrStr.length - 1]);
            }

        });
    });
})(jQuery);
