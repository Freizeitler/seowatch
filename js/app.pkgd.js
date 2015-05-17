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

var getGameData = (function() {
    $.ajax({
        'async': false,
        'global': false,
        'url': '/json/external-data.json',
        'dataType': "json",
        'success': function(data) {
            $('.jaxnb').find('.content').find('span').append(data.shortcut + ' ' + data.description);
        }
    });
})();

// Init
$(document).ready(function() {
	$('.js-reveal').revealButton();

	$('.janb').find('.content').find('span').append('[JANB] jQuery append No Button');
	$('.jpnb').find('.content').find('span').prepend('[JPNB] jQuery prepend No Button');
	$('.jhnb').find('.content').find('span').html('[JHNB] jQuery html No Button');
	$('.jtnb').find('.content').find('span').text('[JTNB] jQuery text No Button');

	$('.jlnb').find('.content').find('span').load('/component/external-content.html .jlnb');
});

$(document).ready(function() {
	var target = document.querySelector('.jinb .content span');
	target.innerHTML = '[JINB] JavaScript innerHTML No Button';

});
//# sourceMappingURL=app.pkgd.js.map