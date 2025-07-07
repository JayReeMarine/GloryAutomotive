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
			var logoHtml = $('#logo').html() || 'GLORY AUTO';

			$(
			'<div id="titleBar">' +
				'<a href="#navPanel" class="toggle"></a>' +
				'<span class="title">' + logoHtml + '</span>' +
			'</div>'
			).appendTo($body);

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
		var imageList = [
			"images/glory_auto1.jpg",
			"images/glory_auto2.jpg",
			"images/glory_auto3.jpg",
			"images/glory_auto4.jpg",
			"images/glory_auto5.jpg",
			"images/glory_auto6.jpg"
		];

		var currentIndex = 0;
		var $bannerImage = $(".right-layout img");

		function updateImage(index) {
			$bannerImage.fadeOut(300, function () {
				$bannerImage.attr("src", imageList[index]).fadeIn(300);
			});
		}

		$(".right-arrow").click(function (e) {
			e.preventDefault();
			currentIndex = (currentIndex + 1) % imageList.length;
			updateImage(currentIndex);
		});

		$(".left-arrow").click(function (e) {
			e.preventDefault();
			currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
			updateImage(currentIndex);
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


document.addEventListener('DOMContentLoaded', () => {
	const serviceMap = {
	  "Logbook Servicing": "logbook",
	  "Roadworthy Inspections": "roadworthy",
	  "Brake Repairs": "brakes",
	  "Tyres, Steering & Suspension": "steering",
	  "Clutch & Transmission": "clutch",
	  "Radiators & Cooling": "cooling",
	  "Air Conditioning": "aircon",
	  "Diagnostics and Auto Electrical": "diagnostics",
	  "Tyres": "tyres",
	  "Other Services": "others"
	};
  
	document.querySelectorAll('.service-card').forEach(card => {
	  card.addEventListener('click', () => {
		const title = card.querySelector('h3')?.innerText.trim();
		const id = serviceMap[title] || '';
		if (id) {
		  window.location.href = `services.html#${id}`;
		}
	  });
	});
  });
  