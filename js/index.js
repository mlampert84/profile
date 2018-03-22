$(document).ready(function() {
  $('.scrollspy').scrollSpy();
  $('.button-collapse').sideNav({
    closeOnClick: true
  });

  matchFlipcardFaceDimensions();

  $('.toggleElement').click(function() {
    $(this)
      .closest('.flipcard')
      .toggleClass('flipped');
  });
});

$(window).resize(function() {
  matchFlipcardFaceDimensions();
});

function matchFlipcardFaceDimensions() {
  //this function matches the size of the backface of the flipcard to the image on the front of the card.
  $('.face.back').each(function() {
    var height = $(this)
      .closest('.flipcard')
      .find('.front')
      .height();
    var width = $(this)
      .closest('.flipcard')
      .find('img')
      .width();
    $(this).height(height);
    $(this).width(width);
  });
}
