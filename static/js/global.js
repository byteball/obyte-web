$(document).ready(function(){
	// USE STRICT
	"use strict";

	// Global variables
	var html_body = $('html, body');

	//-------------------------------------------------------
	// Config Library
	//-------------------------------------------------------

	// Config OWL2
	// Config Slick
	var slickClass = $('.js-slick');
	slickClass.each(function () {
		var option = {
			accessibility: true,
			adaptiveheight: false,
			autoplay: false,
			autoplayspeed: 5000,
			arrows: false,
			asnavfor: null,
			appendarrows: $(this),
			appenddots: $(this),
			prevarrow: '<button type="button" class="slick-prev">Previous</button>',
			nextarrow: '<button type="button" class="slick-next">Next</button>',
			centermode: false,
			centerpadding: '50px',
			cssease: 'ease',
			dots: false,
			dotsclass: 'slick-dots',
			draggable: true,
			fade: false,
			speed: 500,
			pauseonhover: false,
			lg: 1, md: this.lg, sm: this.md, xs: this.sm,
			vertical: false,
			loop: true,
			thumb: false

		};

		for (var k in option) {
			if (option.hasOwnProperty(k)) {
				if ($(this).attr('data-slick-' + k) != null) {
					option[k] = $(this).data('slick-' + k);
				}
			}
		}

		if (option.thumb)
			$(this).slick({
				accessibility: option.accessibility,
				adaptiveHeight: option.adaptiveheight,
				autoplay: option.autoplay,
				autoplaySpeed: option.autoplayspeed,
				arrows: option.arrows,
				asNavFor: option.asnavfor,
				appendArrows: option.appendarrows,
				appendDots: option.appenddots,
				prevArrow: option.prevarrow,
				nextArrow: option.nextarrow,
				centerMode: option.centermode,
				centerPadding: option.centerpadding,
				cssease: option.cssease,
				dots: option.dots,
				dotsClass: option.dotsclass,
				draggable: option.draggable,
				pauseOnHover: option.pauseonhover,
				fade: option.fade,
				vertical: option.vertical,
				slidesToShow: option.lg,
				infinite: option.loop,
				swipeToSlide: true,
				customPaging: function(slick, index) {
					var portrait = $(slick.$slides[index]).data('thumb');
					return '<img src=" ' + portrait + ' "/><div class="bg-overlay"></div>';
				},

				responsive: [
					{
						breakpoint: 1600,
						settings: {
							slidesToShow: option.lg
						}
					},
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: option.md
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: option.md
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: option.sm
						}
					},
					{
						breakpoint: 576,
						settings: {
							slidesToShow: option.xs
						}
					}
				]
			});
		else
			$(this).slick({
				accessibility: option.accessibility,
				adaptiveHeight: option.adaptiveheight,
				autoplay: option.autoplay,
				autoplaySpeed: option.autoplayspeed,
				arrows: option.arrows,
				asNavFor: option.asnavfor,
				appendArrows: option.appendarrows,
				appendDots: option.appenddots,
				prevArrow: option.prevarrow,
				nextArrow: option.nextarrow,
				centerMode: option.centermode,
				centerPadding: option.centerpadding,
				cssease: option.cssease,
				dots: option.dots,
				dotsClass: option.dotsclass,
				draggable: option.draggable,
				pauseOnHover: option.pauseonhover,
				fade: option.fade,
				vertical: option.vertical,
				slidesToShow: option.lg,
				infinite: option.loop,
				swipeToSlide: true,

				responsive: [
					{
						breakpoint: 1600,
						settings: {
							slidesToShow: option.lg
						}
					},
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: option.md
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: option.md
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: option.sm
						}
					},
					{
						breakpoint: 576,
						settings: {
							slidesToShow: option.xs
						}
					}
				]
			});

		$(this).on('init', function() {
			var $firstAnimatingElements = $('div.hero-slide:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		$(this).on('beforeChange', function(e, slick, currentSlide, nextSlide) {
			var $animatingElements = $(this).find('[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});


		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function() {
				var $this = $(this);
				var $animationDelay = $this.data('animation-delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function() {
					$this.removeClass($animationType);
				});
			});
		}
	});

	$(window).on('load', function () {
		$('.caption-heading').css('visibility', 'visible').addClass('fadeInUp');
		$('.caption-text').css('visibility', 'visible').addClass('fadeInUp');
		$('.caption-button').css('visibility', 'visible').addClass('fadeInUp');
	//	$('.section-content-image').css('visibility', 'visible').addClass('fadeInRight');
	});

	// Config Animsition
	$(".animsition").animsition({
		inClass: 'fade-in',
		outClass: 'fade-out',
		inDuration: 800,
		outDuration: 800,
		linkElement: 'a:not([target="_blank"]):not([href^="#"]):not([class^="chosen-single"])',
		loading: true,
		loadingParentElement: 'html',
		loadingClass: 'loader-wrapper',
		loadingInner: '<div class="loader"></div>',
		timeout: false,
		timeoutCountdown: 5000,
		onLoadEvent: true,
		browser: [ 'animation-duration', '-webkit-animation-duration'],
		overlay : false,
		overlayClass : 'animsition-overlay-slide',
		overlayParentElement : 'html',
		transition: function(url){ window.location.href = url; }
	});

	// Couter up
	var counterUp = $(".counterUp");
	if (counterUp) {
		counterUp.counterUp({
			delay: 10,
			time: 1000
		});
	}

	// WOW JS
	function afterReveal (el) {
		el.addEventListener('animationend', function () {
			$(this).css({
				'animation-name': 'none'
			});
		});
	}
	var wow = new WOW({
		mobile:  false,
		callback: afterReveal
	});
	wow.init();

	//-------------------------------------------------------
	// Theme JS
	//-------------------------------------------------------


	// Youtube Popup
	$.fn.YouTubePopUp = function(options) {

		var YouTubePopUpOptions = $.extend({
			autoplay: 1
		}, options );

		$(this).on('click', function (e) {

			var youtubeLink = $(this).attr("href");
			var split_c = '';
			var split_n = 0;

			if( youtubeLink.match(/(youtube.com)/) ){
				split_c = "v=";
				split_n = 1;
				var videoEmbedLink = '';
			}

			if( youtubeLink.match(/(youtu.be)/) || youtubeLink.match(/(vimeo.com\/)+[0-9]/) ){
				split_c = "/";
				split_n = 3;
			}

			if( youtubeLink.match(/(vimeo.com\/)+[a-zA-Z]/) ){
				split_c = "/";
				split_n = 5;
			}

			var getYouTubeVideoID = youtubeLink.split(split_c)[split_n];

			var cleanVideoID = getYouTubeVideoID.replace(/(&)+(.*)/, "");

			if( youtubeLink.match(/(youtu.be)/) || youtubeLink.match(/(youtube.com)/) ){
				videoEmbedLink = "https://www.youtube.com/embed/"+cleanVideoID+"?autoplay="+YouTubePopUpOptions.autoplay+"";
			}

			if( youtubeLink.match(/(vimeo.com\/)+[0-9]/) || youtubeLink.match(/(vimeo.com\/)+[a-zA-Z]/) ){
				videoEmbedLink = "https://player.vimeo.com/video/"+cleanVideoID+"?autoplay="+YouTubePopUpOptions.autoplay+"";
			}

			$("body").append('<div class="YouTubePopUp-Wrap YouTubePopUp-animation"><div class="YouTubePopUp-Content"><span class="YouTubePopUp-Close"></span><iframe src="'+videoEmbedLink+'" allowfullscreen></iframe></div></div>');

			if( $('.YouTubePopUp-Wrap').hasClass('YouTubePopUp-animation') ){
				setTimeout(function() {
					$('.YouTubePopUp-Wrap').removeClass("YouTubePopUp-animation");
				}, 600);
			}

			$(".YouTubePopUp-Wrap, .YouTubePopUp-Close").click(function(){
				$(".YouTubePopUp-Wrap").addClass("YouTubePopUp-Hide").delay(515).queue(function() { $(this).remove(); });
			});

			e.preventDefault();

		});

		$(document).keyup(function(e) {

			if ( e.keyCode == 27 ) {
				$('.YouTubePopUp-Wrap, .YouTubePopUp-Close').click();
			}

		});

	};

	$("a.popUpVideo").YouTubePopUp();


	// Blog modal
	var blog_modal = $('#blogModal');


	blog_modal.on('show.bs.modal', function () {
		$(this).find('.modal-dialog').attr('class', 'modal-dialog  ' + 'fadeIn' + '  animated');
	});

	blog_modal.on('hide.bs.modal', function () {
		$(this).find('.modal-dialog').attr('class', 'modal-dialog  ' + 'fadeOut' + '  animated');
	});

	var wHeight = $(window).height();
	var slide = $('.slide-fullscreen');
	slide.height(wHeight);

	$(window).on('resize', function (){
		wHeight = $(window).height();
		slide.height(wHeight);
	});

	// Back To Top
	var offset = 450;
	var duration = 500;
	var upToTop = $("#up-to-top");
	upToTop.hide();
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > offset) {
			upToTop.fadeIn(duration);
		} else {
			upToTop.fadeOut(duration);
		}
	});

	upToTop.on('click', function (event) {
		event.preventDefault();
		html_body.animate({scrollTop: 0}, duration);
		return false;
	});

	lightbox.option({
		'resizeDuration': 200,
		'wrapAround': true,
		disableScrolling: true
	});

	// Tooltip
	$('[data-toggle="tooltip"]').tooltip();

	// Header and Scroll

	var Nva_Li = $('.navbar-nav li a');
	var header_bar = $('.js-header');
	var header_bar_offsetTop =  header_bar.offset().top;

	Nva_Li.on("click", function (e) {
		if($(this).hasClass("language") == false){
			html_body.animate({scrollTop: $($(this).attr("href")).offset().top - header_bar.height()}, 1000);
			e.preventDefault();
		}
	});

	$(window).on("scroll", function () {
		if ($(this).scrollTop() > header_bar_offsetTop) {
			header_bar.addClass("sticky").removeClass("unsticky");
		} else {
			header_bar.removeClass("sticky").addClass("unsticky");
		}
	});


	// Cache selectors
	var topMenu = header_bar,
		topMenuHeight = topMenu.outerHeight()+15,
		// All list items
		menuItems = topMenu.find(".nav-item a"),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function(){
			var item = $($(this).attr("href"));
			if (item.length) { return item; }
		});

	// Bind to scroll
	$(window).scroll(function(){
		// Get container scroll position
		var fromTop = $(this).scrollTop() + topMenuHeight;

		// Get id of current scroll item
		var cur = scrollItems.map(function(){
			if ($(this).offset().top < fromTop)
				return this;
		});
		// Get the id of the current element
		cur = cur[cur.length-1];
		var id = cur && cur.length ? cur[0].id : "";
		// Set/remove active class
		menuItems
			.parent().removeClass("active")
			.end().filter("[href='#"+id+"']").parent().addClass("active");

	});


});

$(document).ready(function(){
	if($(document).width() < 992){
		$(".navbar .navbar-nav .nav-item .nav-link").on("click",function(){
			$(".hamburger").click()
		});
	}

	$(".language-block").find("img").on("click",function(){
		$('#imgBtnSel').attr("src",$(this).attr("src"));
	});

	// lang picker, currently selected item
	var url = window.location.pathname;
	var filename = url.substring(url.lastIndexOf('/')+1);
	$('#imgBtnSel').attr('src', $('a[href="' + filename + '"].language img').first().attr('src'));
});

function scrollToBlock(block_name){
	$('html,body').animate({
		scrollTop: $("#" + block_name).offset().top - 40
	});
}