window.onload = function () {
    $('#about').addClass('active');
};

$(document).on('click', '.nav-item', function () {
    var active = $(this).attr('id');
    if (active === 'about') {
        $('html,body').animate({ scrollTop: $("#about-section").offset().top }, 1000);
        $('#portfolio').removeClass('active');
        $('#contact').removeClass('active');
        $('#about').addClass('active');
    } else if (active === 'portfolio') {
        $('html,body').animate({ scrollTop: $("#portfolio-section").offset().top }, 1000);
        $('#about').removeClass('active');
        $('#contact').removeClass('active');
        $('#portfolio').addClass('active');

    } else if (active === 'contact') {
        $('html,body').animate({ scrollTop: $("#contact-section").offset().top }, 1000);
        $('#about').removeClass('active');
        $('#portfolio').removeClass('active');
        $('#contact').addClass('active');

    }
});

$(document).on('scroll', function () {
    var aboutSec = $("#about-section").offset().top;
    var portfolioSec = $("#portfolio-section").offset().top;
    var contactSec = $("#contact-section").offset().top;
    var set = $(document).scrollTop();
    console.log(set);
    if (set > aboutSec && set < portfolioSec && set < contactSec) {
        $('#portfolio').removeClass('active');
        $('#contact').removeClass('active');
        $('#about').addClass('active');
    } else if (set > portfolioSec && set < contactSec) {
        $('#about').removeClass('active');
        $('#contact').removeClass('active');
        $('#portfolio').addClass('active');
    } else if (set > contactSec) {
        $('#about').removeClass('active');
        $('#portfolio').removeClass('active');
        $('#contact').addClass('active');
    }
});

