'use strict';
let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

showSlides();
function showSlides() {
    for (let i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    };
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }; 
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    };
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000);
}

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function(){
            slides[i].style.display = "block";
            slides[slideIndex-1].style.display = "none";
            slides[slideIndex+1].style.display = "none";
            dots[i].className += " active";
        
        
    });
 }
