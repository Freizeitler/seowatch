/*
 * boilerplate by menadwork kommunikation GmbH (http://www.menadwork.com) (2015-05-16, 13:43)
 */

$.fn.revealButton=function(){var a=$(this);a.on("click",function(){var a=$(this).next(".content");a.hasClass("active")?a.removeClass("active"):a.addClass("active")})},$(document).ready(function(){$(".js-reveal").revealButton()});
//# sourceMappingURL=app.pkgd.js.map