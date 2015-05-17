/*
 * boilerplate by menadwork kommunikation GmbH (http://www.menadwork.com) (2015-05-17, 15:24)
 */

$.fn.revealButton=function(){var a=$(this);a.on("click",function(){var a=$(this).next(".content");a.hasClass("active")?a.removeClass("active"):a.addClass("active")})},$(document).ready(function(){$(".js-reveal").revealButton(),$(".janb").find(".content").find("span").append("[JANB] jQuery append No Button"),$(".jpnb").find(".content").find("span").prepend("[JPNB] jQuery prepend No Button"),$(".jhnb").find(".content").find("span").html("[JHNB] jQuery html No Button"),$(".jtnb").find(".content").find("span").text("[JTNB] jQuery text No Button")}),$(document).ready(function(){var a=document.querySelector(".jinb .content span");a.innerHTML="[JINB] JavaScript innerHTML No Button"});
//# sourceMappingURL=app.pkgd.js.map