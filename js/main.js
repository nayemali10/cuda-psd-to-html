(function ($) {
"use strict";

// Pre Loader Js 
$(window).on('load',function() {
	$("#loading").fadeOut(500);
});

// Side Bar Menu Js
$(".info-toggle-btn").on("click", function () {
	$(".mobile-sidebar").addClass("info-opened");
	$(".body-overlay").addClass("opened");
});

$(".sidebar-close-btn").on("click", function () {
	$(".mobile-sidebar").removeClass("info-opened");
	$(".body-overlay").removeClass("opened");
});

$(".body-overlay").on("click", function () {
	$(".mobile-sidebar").removeClass("info-opened");
	$(".body-overlay").removeClass("opened");
});

// Sidebar Mobile Menu
$('#mobile-menu-active').metisMenu();
$('#mobile-menu-active .has-dropdown > a').on('click', function (e) {
	e.preventDefault();
});

// One Page Nav
var top_offset = $('.header-area').height() - 0;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});



$("#skill").waypoint(function () {
	// circle-1
	$('#circle-1').circleProgress({
		value: 0.90,
		size: 160,
		thickness: 14,
		// lineCap: 'round',
		emptyFill: "#dfe8ed",
		fill: '#30bae7'
	}).on('circle-animation-progress', function (event, progress) {
		$(this).find('.counter_percentage').html(Math.round(90 * progress) + '<i>%</i>');
	});

	// circle-2
	$('#circle-2').circleProgress({
		value: 0.75,
		size: 160,
		thickness: 14,
		// lineCap: 'round',
		emptyFill: "#dfe8ed",
		fill: '#d74680'
	}).on('circle-animation-progress', function (event, progress) {
		$(this).find('.counter_percentage').html(Math.round(75 * progress) + '<i>%</i>');
	});

	// circle-3
	$('#circle-3').circleProgress({
		value: 0.70,
		size: 160,
		thickness: 14,
		// lineCap: 'round',
		emptyFill: "#dfe8ed",
		fill: '#15c7a8'
	}).on('circle-animation-progress', function (event, progress) {
		$(this).find('.counter_percentage').html(Math.round(70 * progress) + '<i>%</i>');
	});
	
	// circle-4
	$('#circle-4').circleProgress({
		value: 0.85,
		size: 160,
		thickness: 14,
		// lineCap: 'round',
		emptyFill: "#dfe8ed",
		fill: '#eb7d4b'
	}).on('circle-animation-progress', function (event, progress) {
		$(this).find('.counter_percentage').html(Math.round(85 * progress) + '<i>%</i>');
	});

}, {
	offset: 'bottom-in-view'
});



	// init Isotope
	var grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});


// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  grid.isotope({ filter: filterValue });
});

//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});


$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});


// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fa-solid fa-arrow-turn-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});


})(jQuery);