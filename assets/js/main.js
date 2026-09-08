(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner'),
		$wrapper = $('#wrapper');

	// Breakpoints responsivos nativos
	breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	// Animación de precarga suave
	$window.on('load', function() {
		window.setTimeout(function() {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Control interactivo del Menú Lateral Desplegable
	var $menu = $('#menu');

	$menu._toggle = function() {
		if ($body.hasClass('is-menu-visible')) {
			$body.removeClass('is-menu-visible');
		} else {
			$body.addClass('is-menu-visible');
		}
	};

	$header.on('click', 'a[href="#menu"]', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$menu._toggle();
	});

	$menu.on('click', function(event) {
		event.stopPropagation();
	});

	$menu.on('click', '.close', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$body.removeClass('is-menu-visible');
	});

	$menu.on('click', 'a', function(event) {
		var href = $(this).attr('href');
		if (href === '#menu' || href === '#') {
			event.preventDefault();
		}
		event.stopPropagation();
		if (href !== '#menu' && href !== '#') {
			$body.removeClass('is-menu-visible');
		}
	});

	$body.on('click', function(event) {
		if ($body.hasClass('is-menu-visible')) {
			$body.removeClass('is-menu-visible');
		}
	});

	$window.on('keydown', function(event) {
		if (event.keyCode == 27 && $body.hasClass('is-menu-visible')) {
			$body.removeClass('is-menu-visible');
		}
	});

})(jQuery);
