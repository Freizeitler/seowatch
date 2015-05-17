/*
 * boilerplate by menadwork kommunikation GmbH (http://www.menadwork.com) (2015-05-17, 11:50)
 */

$.fn.revealButton=function(){var a=$(this);a.on("click",function(){var a=$(this).next(".content");a.hasClass("active")?a.removeClass("active"):a.addClass("active")})},$(document).ready(function(){$(".js-reveal").revealButton(),$(".janb").find(".content").find("span").append("[JANB] jQuery Append No Button"),$(".jpnb").find(".content").find("span").prepend("[JPNB] jQuery Prepend No Button"),$(".jhnb").find(".content").find("span").html("[JHNB] jQuery Html No Button"),$(".jtnb").find(".content").find("span").text("[JTNB] jQuery Text No Button")});
//# sourceMappingURL=app.js.map