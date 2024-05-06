//custom javascript

//plus-minus-functionality
$(document).ready(function() {
	var buttonPlus = $(".plus-btn");
	var buttonMinus = $(".minus-btn");

	var incrementPlus = buttonPlus.click(function() {
		var $qty = $(this)
			.parent(".button-container")
			.parent(".form-group")
			.find(".qty");
		$qty.val(Number($qty.val()) + 1);
	});

	var decrementMinus = buttonMinus.click(function() {
		var $qty = $(this)
			.parent(".button-container")
			.parent(".form-group")
			.find(".qty");
		var amount = Number($qty.val());
		if (amount > 0) {
			$qty.val(amount - 1);
		}
	});

});




$(document).ready(function() {

	$('.rating-checkbox').on('change', function(){
		var rating_list = [];
		$('#ratingFilters :input:checked').each(function(){
			var ratingValue = $(this).val();
			rating_list.push(ratingValue);
		});
	
		if(rating_list.length == 0){
			$('.tour-list-container').fadeIn();
		}
		else {
			$('.tour-list-container').each(function(){
				var item = $(this).attr('data-rating');
				if($.inArray(item,rating_list) > -1){
					$(this).fadeIn('slow');
				}
				else{
					$(this).hide();
				}
			});
		}   
	});

});



//date-picker
$(function(){
	$('#checkedDate').datepicker({
		format: 'dd-M-yyyy',
		autoclose: true,
		startDate: '0'
	})
	
});


// $(document).ready(function() {
// 	$('#findLocation').click(function(e) {
// 		e.preventDefault();
// 	});
// });


// form-validation for-find-Location
(() => {
  'use strict'
  
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation-findLocation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()


//on-scrolling-N-loading-page-animate-header-functionality
$(window).on('scroll load', function() {
	if ($(this).scrollTop() > 100){  
		$('header').addClass("sticky");
	}
	else{
		$('header').removeClass("sticky");
	}
});


//on-scrolldown-load-content-animate-functionality
function reveal(item, wrapper) {
	var verticalEdge = wrapper.scrollTop() + wrapper.outerHeight();
	var horizontalEdge = wrapper.scrollLeft() + wrapper.outerWidth();
  
	item.each(function () {
	  if (verticalEdge >= $(this).offset().top &&
	  horizontalEdge >= $(this).offset().left) {
		$(this).addClass('animate');
	  }
	});
}
$(window).on("load scroll resize", function (e) {
	e.preventDefault();
	reveal($('.section-slideup'), $(this));
});


function animateLeftRight(item, wrapper) {
  	var verticalEdge = wrapper.scrollTop() + wrapper.outerHeight();
	//console.log(verticalEdge);
	item.each(function () {
	  if (verticalEdge > $(this).offset().top) {
		$('.fadeIn-Left').addClass('fadeInLeft');
		$('.fadeIn-Right').addClass('fadeInRight');
		$('.get-inTouch-heading').addClass('fadeInDown');
		$('.get-inTouch-email').addClass('fadeInUp');
	  }
	});
}
$(window).on("load scroll", function (e) {
	e.preventDefault();
	animateLeftRight($('.fadeIn'), $(this));
});



//onclick-of-loadmore-btn-functionality
$(function() {
	$(".more-content").slice(0, 4).show();
	$("#loadMore").on('click', function(e) {
		e.preventDefault();
		$(".more-content").filter(':hidden').slice(0, 4).slideDown();
		if ($(".more-content").filter(':hidden').length == 0) {
			$("#loadMore").fadeOut('slow');
			$("#loadMore").replaceWith("<p class='text-primary fw-bold'>No more items to show</p>");
		}
		$('html, body').animate({
			scrollTop: $(".more-content").filter(":visible").last().offset().top
		}, 1000);
	});
});

//form-validation-functionality
// (function() {
// 	window.addEventListener('load', function() {
// 		var forms = document.getElementsByClassName('needs-validation-email');
// 		var validation = Array.prototype.filter.call(forms, function(form) {
// 			form.addEventListener('submit', function(event) {
// 				if (form.checkValidity() === false) {
// 					event.preventDefault();
// 					event.stopPropagation();
// 				}
// 				form.classList.add('was-validated');
// 			}, false);
// 		});
// 	}, false);
// })();




