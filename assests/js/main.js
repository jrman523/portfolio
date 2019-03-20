window.onload = function () {
    $('#about').addClass('active');
};

$(document).on('click', '.nav-item', function () {
    var active = $(this).attr('id');
    if (active === 'about') {
        $('html, body').animate({
            scrollTop: $("#about-section").offset().top
        }, 1000);
        $('#portfolio').removeClass('active');
        $('#contact').removeClass('active');
        $('#about').addClass('active');
    } else if (active === 'portfolio') {
        $('html, body').animate({
            scrollTop: $("#portfolio-section").offset().top
        }, 1000);
        $('#about').removeClass('active');
        $('#contact').removeClass('active');
        $('#portfolio').addClass('active');

    } else if (active === 'contact') {
        $('html, body').animate({
            scrollTop: $("#contact-section").offset().top
        }, 1000);
        $('#about').removeClass('active');
        $('#portfolio').removeClass('active');
        $('#contact').addClass('active');

    }
});

$(window).on('scroll', function () {
    var set = $(this).attr('id');
    console.log(set);
    if (set === 'about-section') {
        $('#portfolio').removeClass('active');
        $('#contact').removeClass('active');
        $('#about').addClass('active');
    } else if (set === 'portfolio-section') {
        $('#about').removeClass('active');
        $('#contact').removeClass('active');
        $('#portfolio').addClass('active');
    } else if (set === 'contact-section') {
        $('#about').removeClass('active');
        $('#portfolio').removeClass('active');
        $('#contact').addClass('active');
    }
});

