$.fn.revealButton = function() {
	var button = $(this);
	button.on('click', function() {
		var target = $(this).next('.content');
		if (target.hasClass('active')) {
			target.removeClass('active');
		} else {
			target.addClass('active');
		}
	});
};

// Init
$(document).ready(function() {
	$('.js-reveal').revealButton();

	$('.janb').find('.content').find('span').append('[JANB] jQuery Append No Button');
	$('.jpnb').find('.content').find('span').prepend('[JPNB] jQuery Prepend No Button');
	$('.jhnb').find('.content').find('span').html('[JHNB] jQuery Html No Button');
	$('.jtnb').find('.content').find('span').text('[JTNB] jQuery Text No Button');
});