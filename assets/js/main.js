Verizon = {};

Verizon.Init = function () {

    Verizon._menu();
    Verizon._video();
    Verizon._slick();
    Verizon._modal();
    Verizon._timer();


};



$(document).ready(function () {
    Verizon.Init();
});


Verizon._menu = function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        var headerHeight = $('.header').innerHeight();
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            var headerHeight = '60';
        }
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').stop().animate({
                    scrollTop: target.offset().top - headerHeight - 30
                }, 1000);
                return false;
            }
        }
    });

    function scrollMenu() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            $('.header').addClass('nav-scrolled');
        } else {
            $('.header').removeClass('nav-scrolled');
        }
    }

    scrollMenu();

    $(document).on('scroll', function () {
        scrollMenu();
    });

};

Verizon._video = function () {
    var video = $('.video-img');
    var urlVideo = video.data('url');
    var heightVideo = $('.video-img').innerHeight();

    video.on('click', function () {
        video.parent().addClass('iframe-visible');
        $(this).html('<iframe width="100%" height="" src="https://www.youtube.com/embed/' + urlVideo + '?rel=0;autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        video.find('iframe').css('height', heightVideo);
    });
};

Verizon._slick = function () {

    if ($('.slider').length > 0) {


        $('.line-catalog').each(function (index, element) {
            var slickLine = $(this).find('.slider');
            var indexSlider = slickLine.addClass('slider-' + index);
            var slickItems = indexSlider.find('.item');
            var curPrev = indexSlider.parent().find('.prev');
            var curNext = indexSlider.parent().find('.next');


            if (slickItems.length <= 5) {

                $(indexSlider).slick({
                    slidesToShow: slickItems.length,
                    slidesToScroll: 1,
                    autoplay: false,
                    autoplaySpeed: 3000,
                    dots: false,
                    prevArrow: curPrev,
                    nextArrow: curNext,
                    infinite: false,
                    mobileFirst: true,
                    responsive: [
                        {
                            breakpoint: 2000,
                            settings: {
                                slidesToShow: slickItems.length,
                            }
                        },
                        {
                            breakpoint: 1400,
                            settings: {
                                slidesToShow: slickItems.length,
                            }
                        },
                        {
                            breakpoint: 1300,
                            settings: {
                                slidesToShow: slickItems.length,
                            }
                        },
                        {
                            breakpoint: 1280,
                            settings: {
                                slidesToShow: slickItems.length,
                            }
                        },
                        {
                            breakpoint: 1000,
                            settings: {
                                slidesToShow: slickItems.length,
                            }
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 1,
                            }
                        },
                        {
                            breakpoint: 319,
                            settings: {
                                slidesToShow: 1,
                            }
                        }


                    ]
                });

            } else {
                $(indexSlider).slick({
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    autoplay: false,
                    autoplaySpeed: 3000,
                    dots: false,
                    prevArrow: curPrev,
                    nextArrow: curNext,
                    infinite: false,
                    mobileFirst: true,



                    responsive: [
                        {
                            breakpoint: 2000,
                            settings: {
                                slidesToShow: 5,
                            }
                        },
                        {
                            breakpoint: 1400,
                            settings: {
                                slidesToShow: 5,
                            }
                        },
                        {
                            breakpoint: 1300,
                            settings: {
                                slidesToShow: 5,
                            }
                        },
                        {
                            breakpoint: 1280,
                            settings: {
                                slidesToShow: 5,
                            }
                        },
                        {
                            breakpoint: 1000,
                            settings: {
                                slidesToShow: 5,
                            }
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 4,
                            }
                        },
                        {
                            breakpoint: 319,
                            settings: {
                                slidesToShow: 1,
                            }
                        }


                    ]
                });

            }


        });
    }

};

Verizon._timer = function () {

    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

    var x = setInterval(function () {

        var now = new Date().getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $('#countdown .days .value').html(days);
        $('#countdown .hours .value').html(hours);
        $('#countdown .minutes .value').html(minutes);
        // document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
        //     + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "Concluído";
        }
    }, 1000);


};

Verizon._modal = function () {
    const modal = $('.modal');

    $('.item').on('click', function () {
        var dataVideo = $(this).data('video');
        $('.modal').addClass('show');
        console.log(dataVideo);
        $('body').css('overflow', 'hidden');
        $('.video-md').html('<iframe width="100%" height="" src="https://www.youtube.com/embed/' + dataVideo + '?rel=0;autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    });

    $('.close-modal, .modal').on('click', function () {
        // $('.modal').toggle();
        $('.modal').removeClass('show');
        $('body').css('overflow', 'inherit');
        $('.video-md').html('');
    });



};

