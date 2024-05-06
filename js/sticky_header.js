//on-scrolling-N-loading-page-animate-header-functionality
$(window).on('scroll load', function() {
	if ($(this).scrollTop() > 100){  
		$('header').addClass("sticky");
	}
	else{
		$('header').removeClass("sticky");
	}
});