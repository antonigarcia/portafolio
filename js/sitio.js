/*iniciamos WOW*/
new WOW().init();


/*iniciamos smooScroll*/

var scroll = new SmoothScroll('a[href*="#nosotros"]', {
    speed: 1000,
    offset: 80
});

var scroll = new SmoothScroll('a[href*="#inicio"]', {
    speed: 1000
});


var scroll = new SmoothScroll('a[href*="#servicios"]', {
    speed: 1000,
    offset: 60
});

var scroll = new SmoothScroll('a[href*="#contacto"]', {
    speed: 1000,
    offset: 60
});


/*Ocultar y mostrar boton "ir arriba"*/

$(function () {
    $(window).scroll(function () {
        var scrolltop = $(this).scrollTop();
        if (scrolltop >= 50) {
            $(".ir-arriba").fadeIn();
        } else {
            $(".ir-arriba").fadeOut();
        }

    });
});


/*Cabecera animada*/
$(window).scroll(function () {
    var nav = $(".encabezado");
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        nav.addClass("fondo-menu");

    } else {
        nav.removeClass("fondo-menu");
    }
});


$('body').scrollspy({ target: '#menu-principal' })

