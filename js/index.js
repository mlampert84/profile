$(document).ready(function() {
  $(".scrollspy").scrollSpy();
  $(".button-collapse").sideNav({
    closeOnClick: true
  });

  matchFlipcardFaceDimensions();

  $(".toggleFront").click(function() {
    // console.log("Toggling image");
    var heightBack = $(this)
      .closest(".flipcard")
      .find(".toggleBack")
      .height();
    var heightFront = $(this).height();

    $(this).animate({ marginTop: heightBack - heightFront }, 2000);

    $(this)
      .closest(".flipcard")
      .addClass("flipped");
  });

  $(".toggleBack").click(function() {
    $(this)
      .closest(".flipcard")
      .find(".toggleFront")
      .animate({ marginTop: 0 }, 2000);

    $(this)
      .closest(".flipcard")
      .removeClass("flipped");
  });

  $(".btn").click(function(event) {
    event.stopPropagation();
  });
});

$(window).resize(function() {
  matchFlipcardFaceDimensions();
  fitToggleBackHeightOnResize();
});

//this function matches the size of the backface of the flipcard to the image on the front of the card.
function matchFlipcardFaceDimensions() {
  $(".face.back").each(function() {
    var height = $(this)
      .closest(".flipcard")
      .find(".front")
      .height();
    var width = $(this)
      .closest(".flipcard")
      .find("img")
      .width();
    $(this).css("min-height", height + "px");
    $(this).width(width);
  });
}

//this function is designed to change the margin height of the front element as needed
//to give the back element its space.
function fitToggleBackHeightOnResize() {
  $(".flipped").each(function() {
    var toggleFront = $(this).find(".toggleFront");
    var heightBack = $(this)
      .find(".toggleBack")
      .height();
    var heightFront = toggleFront.height();

    toggleFront.css("margin-top", heightBack - heightFront + "px");
  });
}
