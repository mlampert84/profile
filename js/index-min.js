function matchFlipcardFaceDimensions(){$(".face.back").each(function(){var i=$(this).closest(".flipcard").find(".front").height(),c=$(this).closest(".flipcard").find("img").width();$(this).height(i),$(this).width(c)})}$(document).ready(function(){$(".scrollspy").scrollSpy(),$(".button-collapse").sideNav({closeOnClick:!0}),matchFlipcardFaceDimensions(),$(".toggleElement").click(function(){$(this).closest(".flipcard").toggleClass("flipped")})}),$(window).resize(function(){matchFlipcardFaceDimensions()});