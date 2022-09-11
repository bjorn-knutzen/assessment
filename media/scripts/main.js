// SCROLL ADD CLASS ON HEADER
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 40) {
        $(".header").addClass("header__fixed-header");
    } else {
        $(".header").removeClass("header__fixed-header");
    }
});

// MOBILE NAV
$(document).ready(function(){
    $('#nav-button').click(function(){
        $(this).toggleClass('nav--open');
        $(".nav__items").toggleClass("nav__items__open");
    });
});


