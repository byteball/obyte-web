/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Initializations of plugins 
 */

(function($){
	$(document).ready(function(){
	
		
		// Fixed header
		//-----------------------------------------------
		var makeHeaderFixed = function() {
			if (($(".header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		};
		$(window).scroll(makeHeaderFixed).load(makeHeaderFixed);

		//Scroll Spy
		//-----------------------------------------------
		if($(".scrollspy").length>0) {
			$("body").addClass("scroll-spy");
			$('body').scrollspy({ 
				target: '.scrollspy',
				offset: 152
			});
		}

		//Smooth Scroll
		//-----------------------------------------------
		if ($(".smooth-scroll").length>0) {
			$('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top-151
						}, 1000);
						return false;
					}
				}
			});
		}

		// Animations
		//-----------------------------------------------
		if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
			$("[data-animation-effect]").each(function() {
				var $this = $(this),
				animationEffect = $this.attr("data-animation-effect");
				if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
					$this.appear(function() {
						setTimeout(function() {
							$this.addClass('animated object-visible ' + animationEffect);
						}, 10);
					}, {accX: 0, accY: -130});
				} else {
					$this.addClass('object-visible');
				}
			});
		};

		// Isotope filters
		//-----------------------------------------------
		if ($('.isotope-container').length>0) {
			$(window).load(function() {
				$('.isotope-container').fadeIn();
				var $container = $('.isotope-container').isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					transitionDuration: '0.4s',
					filter: "*"
				});
				// filter items on button click
				$('.filters').on( 'click', 'ul.nav li a', function() {
					var filterValue = $(this).attr('data-filter');
					$(".filters").find("li.active").removeClass("active");
					$(this).parent().addClass("active");
					$container.isotope({ filter: filterValue });
					return false;
				});
			});
		};

		//Modal
		//-----------------------------------------------
		if($(".modal").length>0) {
			$(".modal").each(function() {
				$(".modal").prependTo( "body" );
			});
		}
//ANiMATED FRAME BORDER
		// $(".frame-it").rollingBorder({

		// padding: 0,

		// color: "rgba(113, 194, 255, 0.48)",

		// width: 2,

		// length: "100%"

		// });
		// $(".frame-it1").rollingBorder({

		// padding: 0,

		// color: "rgba(113, 194, 255, 0.48)",

		// width: 1,

		// length: "100%"

		// });

		// COUNTDOWN
		/*
		var now = new Date().getTime()/1000

		var upcoming = null; 
		var last= null;

		var fullMoons = [
			{epoch: 1497013800, sDate: 'June 9 13:10 UTC'},
			{epoch: 1499573220, sDate: 'July 9 04:07 UTC'},
			{epoch: 1502129400, sDate: 'August 7 18:10 UTC'},
			{epoch: 1504681320, sDate: 'September 6 07:02 UTC'},
		//	{epoch: 1507228800, sDate: 'October 5 18:40 UTC'},
			{epoch: 1509772980, sDate: 'November 4 05:23 UTC'},
			{epoch: 1519951860, sDate: 'March 2, 2018 00:51 UTC'},
		//	{epoch: 1512316020, sDate: 'December 3 15:47 UTC'},
		//	{epoch: 9999999999, sDate: 'LAST we already conquered the world'},
		]

		for (var i = 0;i<fullMoons.length -1;i++ ){
			if(now > fullMoons[i].epoch && now< fullMoons[i+1].epoch){
				last = fullMoons[i]
				upcoming = fullMoons[i+1]
				break;

			} else {
				last = fullMoons[fullMoons.length-1]
				upcoming = fullMoons[fullMoons.length-1]

			}
		}
		$( "#distDate" ).html('Full Moon, ' + upcoming.sDate)
		var circleBorderFactor = 0.5
		$('.countdown').final_countdown({
			start : last.epoch, //Here use Milisecond. To convert your time you can go to this(https://currentmillis.com/) website. 
			end   : upcoming.epoch,
			now : now,
			seconds: {
				borderColor: 'rgb(139, 142, 150)',
				borderWidth: 3*circleBorderFactor
			},
			minutes: {
				borderColor: 'rgb(139, 142, 150)',
				borderWidth: 5*circleBorderFactor
			},
			hours: {
				borderColor: 'rgb(139, 142, 150)',
				borderWidth: 8*circleBorderFactor
			},
			days: {
				borderColor: 'rgb(139, 142, 150)',
				borderWidth: 13*circleBorderFactor
			}}, function() {
			});
		*/

		// lang picker, currently selected item
		var url = window.location.pathname;
		var filename = url.substring(url.lastIndexOf('/')+1);
		$('.lang .flag').attr('src', $('.lang li a[href="/' + filename + '"] img').first().attr('src'));
		if ($(window).width() < 1200)
			$('.lang').toggleClass('dropup');

	}); // End document ready
})(this.jQuery);

