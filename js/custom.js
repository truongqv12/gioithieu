$(document).ready(function($) {
	new WOW().init();
	$('.carousel[data-type="multi"] .item').each(function() {
		var next = $(this).next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}
		next.children(':first-child').clone().appendTo($(this));

		for (var i = 0; i < 2; i++) {
			next = next.next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}

			next.children(':first-child').clone().appendTo($(this));
		}
	});

	$("a.btn_go_top").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
	    return false;
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
	