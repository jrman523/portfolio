window.onload = function () {
    $('#about').addClass('active');
    $('#about-section').show();
    $('#portfolio-section').hide();
    $('#contact-section').hide();
};

$(document).on('click', '.nav-item', function () {
    var active = $(this).attr('id');
    $(this).removeClass('active');
    if (active === 'about') {
        $('#portfolio').removeClass('active');
        $('#contact').removeClass('active');
        $('#about').addClass('active');
        $('#portfolio-section').hide();
        $('#contact-section').hide();
        $('#about-section').show();
    } else if (active === 'portfolio') {
        $('#about').removeClass('active');
        $('#contact').removeClass('active');
        $('#portfolio').addClass('active');
        $('#contact-section').hide();
        $('#about-section').hide();
        $('#portfolio-section').show();
    } else if (active === 'contact') {
        $('#about').removeClass('active');
        $('#portfolio').removeClass('active');
        $('#contact').addClass('active');
        $('#portfolio-section').hide();
        $('#about-section').hide();
        $('#contact-section').show();
    }
});