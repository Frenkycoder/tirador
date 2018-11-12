var first = (function () {
    var init = function () {
        $(function () {
            //slider

            $('.slidelink').on("click", function (e) {
                e.preventDefault();
                $(".slider__item").removeClass("openLi");
                $(this).parent().parent().addClass("openLi");
                $(".active").children(".actbox").remove();
                $(this).parent().parent().find(".actbox").clone().prependTo(".active");
            });

            //right slider control
            $('.right').on("click", function (e) {
                e.preventDefault();
                var openLi = $('li.openLi');
                var li = $('.slider__item');
                $(".active").children(".actbox").remove();
                li.removeClass("openLi");
                if (openLi.prev().hasClass("active")) {
                    $("ul.slider__list li:last").addClass("openLi").find(".actbox").clone().prependTo(".active");
                } else {
                    openLi.prev().addClass("openLi").find(".actbox").clone().prependTo(".active");
                }

            });
            //
             //left slider control
             $('.left').on("click", function (e) {
                 e.preventDefault();
                 var openLi = $('li.openLi');
                 var li = $('.slider__item');
                 $(".active").children(".actbox").remove();
                 li.removeClass("openLi");
                 openLi.next().addClass("openLi").find(".actbox").clone().prependTo(".active");
             });

            $(".hero__mouse").click(function () {
                $('html,body').animate({
                        scrollTop: $("#firsttab").offset().top
                    },
                    'slow');
            });

            //header slider
            $('.header__slide').slick({
                autoplay: true,
                arrows: false,
                fade: true,
                speed: 900,
                rtl: true,
                cssEase: 'linear'
            });

            $('.header__slide').on('afterChange', function (event, slick, currentSlide) {
                $('.slick-active .title').removeClass('hidden');
                $('.slick-active .title').addClass('animated slideInLeft');
                $('.slick-active .hero__price').removeClass('hidden');
                $('.slick-active .hero__price').addClass('animated slideInRight');
                $('.slick-active .hero__span').removeClass('hidden');
                $('.slick-active .hero__span').addClass('animated slideInUp');
                $('.slick-active .btn').removeClass('hidden');
                $('.slick-active .btn').addClass('animated slideInDown');
                $('.slick-active .hero__img').removeClass('hidden');
                $('.slick-active .hero__img').addClass('animated zoomIn');
            });

            $('.header__slide').on('beforeChange', function (event, slick, currentSlide) {
                $('.slick-active .title').removeClass('animated slideInLeft');
                $('.slick-active .title').addClass('hidden');
                $('.slick-active .hero__price').removeClass('animated slideInRight');
                $('.slick-active .hero__price').addClass('hidden');
                $('.slick-active .hero__span').removeClass('animated slideInUp');
                $('.slick-active .hero__span').addClass('hidden');
                $('.slick-active .btn').removeClass('animated slideInDown');
                $('.slick-active .btn').addClass('hidden');
                $('.slick-active .hero__img').removeClass('animated zoomIn');
                $('.slinck-active .hero__img').addClass('hidden');
            });

            $('#users').validate({
                rules: {
                    email: {
                        required: true,
                        email: true
                    },
                    user: {
                        required: true,
                        minlength: 3
                    },
                    user2: {
                        required: true,
                        minlength: 3
                    },
                    submitHandler: function () {
                        alert('valid');
                    }
                }
            });

            //tabs
            $( "#tabs" ).tabs();
            $( "#tabs2" ).tabs();


        });
    }

    return {
        init: init
    };
})();
