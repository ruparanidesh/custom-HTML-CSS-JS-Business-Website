(function ($) {

    $(document).ready(function () {

        /* =====================
           MENU TOGGLE
        ====================== */

        jQuery(".menupart img").click(function() {
            jQuery(".main_navpt").css("left", "0");
        });

        jQuery(".closeicon").click(function() {
            jQuery(".main_navpt").css("left", "-8000px");
        });

       



        /* =====================
               SLIDER 1
            ====================== */

            var slider1 = $(".slider1");

            slider1.owlCarousel({
                stagePadding: 60,
                items: 3,
                margin: 15,
                autoplay: true,
                autoplayTimeout: 2000,
                loop: true,
                center: true,
                nav: false,
                dots: false,

                responsive: {
                    0: {
                        items: 1,
                        stagePadding: 10
                    },
                    320: {
                        items: 1,
                        stagePadding: 20
                    },
                    400: {
                        items: 1,
                        stagePadding: 90
                    },
                    576: {
                        items: 1,
                        stagePadding: 90
                    },
                    767: {
                        items: 1,
                        stagePadding: 120
                    },                  

                    991: {
                        items: 1,
                        stagePadding: 120
                    },
                    1200: {
                        items: 1,
                        stagePadding: 180
                    },
                    1300: {
                        items: 1,
                        stagePadding: 190
                    },
                    1440: {
                        items: 1,
                        stagePadding: 200
                    }
                }
            });

            $('.customNextBtn1').click(function () {
                slider1.trigger('next.owl.carousel');
            });

            $('.customPrevBtn1').click(function () {
                slider1.trigger('prev.owl.carousel');
            });


        /* =====================
           SLIDER 2
        ====================== */

        var slider2 = $(".slider2");

        slider2.owlCarousel({
            items: 1,
            margin: 0,
            autoplay: false,
            autoplayTimeout: 4000,
            loop: true,
            nav: false,
            dots: true,
            responsive: {
                0: { items: 1 },
                576: { items: 1 },
                767: { items: 1 },
                991: { items: 1 }   
            }
        });

        $('.customNextBtn2').click(function () {
            slider2.trigger('next.owl.carousel');
        });

        $('.customPrevBtn2').click(function () {
            slider2.trigger('prev.owl.carousel', [300]);
        });

    });

})(jQuery);