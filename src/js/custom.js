jQuery(document).ready(function () {

    var flag = false;

	// slick
	$('.events').slick({
		 autoplay: true,
		 dots: true,
		 autoplaySpeed: 4000
	});

	// fancybox
	$(".portfolio__link").fancybox();

	// aside-menu
	var slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('menu'),
        'padding': 256,
        'tolerance': 70,
        'side' : 'right'
      });

	// hamburger

    $('.hamburger').on('click', function (e) {
    	slideout.open();
    });

    $('.btn-close').on('click', function (e) {
    	slideout.close();
    });
    

    // fixed menu
    $(document).on('scroll', function (e) {

    	var scrollTop = $(this).scrollTop();

    	if (scrollTop > 350) {

    		if (!flag) {
    			$('.header').hide().addClass('header_fixed').slideDown(300);
                $('.to-top').fadeIn(500);
    			flag = true;
    		}

    	} else if (scrollTop < 350) {
    		$('.header').removeClass('header_fixed');
             $('.to-top').fadeOut(200);
    		flag = false;
    	}
    });

    // button to-top
    $('.to-top').on('click', function (e) {
        var doc = $(document),
            scroll = doc.scrollTop(), // текущий скролл страницы
            dec = 100,            // шаг скроллинга
            loop;

        function scrollTo(dec) {

            scroll -= dec;
            doc.scrollTop(scroll);

            if(scroll < 0) {
                clearLoop(loop)
            }
        }

        function clearLoop(loop) {
            clearInterval(loop);
        }

        loop = setInterval( scrollTo, 10, dec);

    });

});


