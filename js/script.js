
//Navbar

$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});
// Hamburgur menu
function myFunction(x) {
  x.classList.toggle("change");
}


//Testimonials
jQuery(document).ready(function($) {
        		"use strict";
        		//  TESTIMONIALS CAROUSEL HOOK
		        $('#customers-testimonials').owlCarousel({
		            loop: true,
		            center: true,
		            items: 3,
		            margin: 0,
		            autoplay: true,
		            dots:true,
		            autoplayTimeout: 2500,
		            smartSpeed: 450,
		            responsive: {
		              0: {
		                items: 1
		              },
		              768: {
		                items: 1
		              },
		              1170: {
		                items: 3
		              }
		            }
		        });
        	});


//smooth scroll for menu link

$(' a').on('click', function(e) {
	var el = $( e.target.getAttribute('href') );
	var elOffset = el.offset().top;
	var elHeight = el.height();
	var windowHeight = $(window).height();
	var offset;

	if (elHeight < windowHeight) {
		offset = elOffset - ((windowHeight / 2) - (elHeight / 2));
	}
	else {
		offset = elOffset;
	}
	var speed = 700;
	$('html, body').animate({scrollTop:offset}, speed);
});


//clients
$('.blog1').owlCarousel({
	loop:true,
	items:3,
	dots: true,
	margin:50,
	autoplay:true,
	autoplayTimeout:1000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 1
		},
		1000: {
			items: 3
		}
	}
});
//progress bar
$(function () {
	var $section = $('.progress-element');

	$(document).bind('scroll', function (ev) {
		var scrollOffset = $(document).scrollTop();
		var containerOffset = $section.offset().top - window.innerHeight;

		if (scrollOffset > containerOffset) {
			$(document).unbind('scroll');
			$(".progress-element").each(function () {
				var progressBar = $(".progress-bar");
				progressBar.each(function (indx) {
					$(this).animate({"width": $(this).attr("aria-valuenow") + "%"}, 800);
				});
			});
		}
	});
});
