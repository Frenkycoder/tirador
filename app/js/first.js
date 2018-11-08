var first = (function() {
    var init = function() {
        $(function() {
        //slider

           $('.slidelink').on("click", function (e) {
               e.preventDefault();
               $(".slider__list").find("li").removeClass("active animated fadeIn");
               $(this).parent().parent().addClass("active animated fadeIn");
           });

           //right slider control
           $('.right').on("click", function (e) {
               e.preventDefault();
               var li = $('li.active');
               if($('ul.slider__list li:last').hasClass("active")) {
                   li.removeClass('active animated fadeIn');
                   $('ul.slider__list li:first').addClass('active animated fadeIn');
               }
               li.removeClass('active animated fadeIn');
               li.next().addClass('active animated fadeIn');
           });

            //left slider control
            $('.left').on("click", function (e) {
                e.preventDefault();
                // var firstLi = $('.slider__item:first-child');
                // var lastLi = $('.slider__item:last-child');
                var li = $('li.active');
                if($('ul.slider__list li:first').hasClass("active")) {
                    li.removeClass('active animated fadeIn');
                    $('ul.slider__list li:last').addClass('active animated fadeIn');
                }
                li.removeClass('active animated fadeIn');
                li.prev().addClass('active animated fadeIn');
            });
            $(".hero__mouse").click(function() {
                $('html,body').animate({
                        scrollTop: $("#firsttab").offset().top},
                    'slow');
            });
            $('.header__slide').slick({
                autoplay: true,
                arrows: false,
                fade: true,
                speed: 900,
                rtl: true,
                cssEase: 'linear'
            });
            
            $('.header__slide').on('afterChange', function(event, slick, currentSlide){
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

            $('.header__slide').on('beforeChange', function(event, slick, currentSlide){
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
                rules : {
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

        });
    }

    return {
        init: init
    };
})();
