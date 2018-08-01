$(document).ready(function($) {
	new WOW().init();

    $(".images").hover( function (e) {
        $(this).find('img').toggleClass('pulse animated infinite', e.type === 'mouseenter');
    });
    // Scroll to page sections
    function goToByScroll(id){
        // Reove "link" from the ID
        id = id.replace("link-", "");
        // Scroll
        $('html,body').animate({
                scrollTop: $("#"+id).offset().top},
            'slow');
    }

    $("nav").find("a").click(function() {
        // Call the scroll function
        goToByScroll($(this).attr("id"));
    });
    // GÂU TU TỐP
	$("a.btn_go_top").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
	    return false;
	});
	$("a.btn_go_top").hover( function (e) {
		$(this).toggleClass('pulse tada');
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
	