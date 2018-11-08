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

            //     new SmoothScroll(document,120,12);
            //
            // function SmoothScroll(target, speed, smooth) {
            //     if (target == document)
            //         target = (document.documentElement || document.body.parentNode || document.body) // cross browser support for document scrolling
            //     var moving = false
            //     var pos = target.scrollTop
            //     target.addEventListener('mousewheel', scrolled, false)
            //     target.addEventListener('DOMMouseScroll', scrolled, false)
            //
            //     function scrolled(e) {
            //         e.preventDefault(); // disable default scrolling
            //
            //         var delta = normalizeWheelDelta(e)
            //
            //         pos += -delta * speed
            //         pos = Math.max(0, Math.min(pos, target.scrollHeight - target.clientHeight)) // limit scrolling
            //
            //         if (!moving) update()
            //     }
            //
            //     function normalizeWheelDelta(e){
            //         if(e.detail){
            //             if(e.wheelDelta)
            //                 return e.wheelDelta/e.detail/40 * (e.detail>0 ? 1 : -1) // Opera
            //             else
            //                 return -e.detail/3 // Firefox
            //         }else
            //             return e.wheelDelta/120 // IE,Safari,Chrome
            //     }
            //
            //     function update() {
            //         moving = true
            //         var delta = (pos - target.scrollTop) / smooth
            //         target.scrollTop += delta
            //         if (Math.abs(delta) > 0.5)
            //             requestFrame(update)
            //         else
            //             moving = false
            //     }
            //
            //     var requestFrame = function() { // requestAnimationFrame cross browser
            //         return (
            //             window.requestAnimationFrame ||
            //             window.webkitRequestAnimationFrame ||
            //             window.mozRequestAnimationFrame ||
            //             window.oRequestAnimationFrame ||
            //             window.msRequestAnimationFrame ||
            //             function(func) {
            //                 window.setTimeout(func, 1000 / 50);
            //             }
            //         );
            //     }()
            // }
        });
    }

    return {
        init: init
    };
})();
