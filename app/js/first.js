var first = (function() {
    var init = function() {
        $(function() {
        //    slider
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
        });
    }

    return {
        init: init
    };
})();
