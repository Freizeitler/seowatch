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
});
//# sourceMappingURL=app.pkgd.js.map