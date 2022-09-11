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
        $(".nav__items").toggleClass("nav__items--open");
    });
});

//SEARCH FIELD
$(document).ready(function(){
    $('#search-button').click(function(){
        $(this).toggleClass('search__active-field--open');
        $(".search__field-holder").toggleClass("search__field-holder--active");
    });
});

//CARROUSEL

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
//Carrousel behaviour
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideshow__item");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
