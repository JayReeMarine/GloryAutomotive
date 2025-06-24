/*
	TXT by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '361px',   '736px'  ],
			xsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			speed: 300,
			alignment: 'center'
		});

	// Scrolly
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height() - 5; }
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});



		
		// customise javascript features
		// Created By: Jaeyun Ree

		// 1. Banner image slider

		// Index images
		var imageList = [
			"images/general_auto1.jpg",
			"images/general_auto2.jpg",
			"images/general_auto3.jpg",
			"images/general_auto4.jpg",
			"images/general_auto5.jpg",
			"images/general_auto6.jpg"
		];

		// Service images
		  var serviceImageList = [
			"images/service1.jpg",
			"images/service2.jpg",
			"images/service3.jpg",
			"images/service4.jpg",
			"images/service5.jpg",
			"images/service6.jpg",
			"images/service7.jpg",
			"images/service8.jpg",
		];

		var currentIndex = 0;
		var $bannerImage = $(".right-layout img");

		function updateIndexImage(index) {
			$bannerImage.fadeOut(300, function () {
				$bannerImage.attr("src", imageList[index]).fadeIn(300);
			});
		}

		function updateServiceImage(index) {
			$bannerImage.fadeOut(300, function () {
				$bannerImage.attr("src", serviceImageList[index]).fadeIn(300);
			});
		}

		$(".service-right-arrow").click(function (e) {
			e.preventDefault();
			currentIndex = (currentIndex + 1) % serviceImageList.length;
			updateServiceImage(currentIndex);
		});

		$(".service-left-arrow").click(function (e) {
			e.preventDefault();
			currentIndex = (currentIndex - 1 + serviceImageList.length) % serviceImageList.length;
			updateServiceImage(currentIndex);
		});

		$(".right-arrow").click(function (e) {
			e.preventDefault();
			currentIndex = (currentIndex + 1) % imageList.length;
			updateIndexImage(currentIndex);
		});

		$(".left-arrow").click(function (e) {
			e.preventDefault();
			currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
			updateIndexImage(currentIndex);
		});

		// 2. brand logo slider
		var $brandLogos = $(".brand-logos");
		var scrollStep = 100; 

		$(".brand-arrow.right").on("click", function (e) {
			e.preventDefault();
			$brandLogos.animate({
				scrollLeft: $brandLogos.scrollLeft() + scrollStep
			}, 500);
		});

		$(".brand-arrow.left").on("click", function (e) {
			e.preventDefault();
			$brandLogos.animate({
				scrollLeft: $brandLogos.scrollLeft() - scrollStep
			}, 500);
		});


})(jQuery);