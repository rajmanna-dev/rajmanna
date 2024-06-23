$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $('nav').css('background-color', '#274d79');
    } else {
      $('nav').css('background-color', '');
    }
  });
  $('.menu').on('click', function () {
    $('.menu').removeClass('activeMenu');
    $(this).addClass('activeMenu');
  });
  $('a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();
      let hash = this.hash;

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
  $('.portfolio').on('mouseenter', function () {
    $(this).find('.overlay').removeClass('hidden');
    $(this)
      .find('.overlay')
      .addClass('flex')
      .css('transition', 'all ease-in-out 0.8s');
  });
  $('.portfolio').on('mouseleave', function () {
    $(this).find('.overlay').addClass('hidden');
    $(this).find('.overlay').removeClass('flex');
  });
  if ($(window).width() <= 768) {
    $('.portfolio').on('click', function () {
      $(this)
        .find('.overlay')
        .css('background-color', 'rgba(39, 77, 121, 0.84)');
    });
  }
});
