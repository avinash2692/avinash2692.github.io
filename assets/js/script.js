
var open = function () {

    $('.button-wrapper').removeClass('animated fadeInLeft').addClass('animated fadeOutLeft');
    $(".menu").css({
        "display": "block"
    }).removeClass('animated fadeOutLeft').addClass('animated fadeInLeft');

    return false;
};

var close = function () {


    $(".menu").removeClass('animated fadeInLeft').addClass('animated fadeOutLeft');
    $('.button-wrapper').addClass('animated fadeInLeft').removeClass('animated fadeOutLeft');

    return false;
};

function pageloader() {
  $(".page-pop").css({
    display: block
  }).removeClass("animated fadeOut").addClass("animated fadeIn");
  return false;
}



$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $(".open-menu-btn").click(open);

    $(".close-menu-btn").click(close);

    $(".close-popover").click(function() {
      $(".page-pop").removeClass("animated fadeIn").addClass("animated fadeOut");
      return false;
    });

});
