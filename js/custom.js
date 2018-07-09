$(document).ready(function($) {
	new WOW().init();

    $(".images").hover( function (e) {
        $(this).find('img').toggleClass('pulse animated infinite', e.type === 'mouseenter');
    });

    // GÂU TU TỐP
	$("a.btn_go_top").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
	    return false;
	});
	$("a.btn_go_top").hover( function (e) {
		$(this).toggleClass('pulse bounce');
    });
	$(window).scroll(function(e) {
		var Scroll_top = $(window).scrollTop();
		if (Scroll_top < 500){
			$('a.btn_go_top').css('display','none');				
		} else {
			$('a.btn_go_top').css('display','block');
		}
	})
});
	