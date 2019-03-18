window.onload = function () {
    $('#about').addClass('active');
};

$(document).on('click', '.nav-item', function () {
    var active = $(this).attr('id');
    if (active === 'about') {
        $('#portfolio').removeClass('active');
        $('#contact').removeClass('active');
        $('#about').addClass('active');
    } else if (active === 'portfolio') {
        $('#about').removeClass('active');
        $('#contact').removeClass('active');
        $('#portfolio').addClass('active');
    } else if (active === 'contact') {
        $('#about').removeClass('active');
        $('#portfolio').removeClass('active');
        $('#contact').addClass('active');
    }
});

$(window).on('scroll', '.container', function () {
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