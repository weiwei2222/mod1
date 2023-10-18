'use strict';

const btnmodal = document.querySelectorAll(".show-modal");
const modal = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const btnclose = document.querySelectorAll(".close-modal")

for (let i = 0; i < btnmodal.length; i ++){
    btnmodal[i].addEventListener("click", function() { 
        modal[i].classList.remove('hidden');
        overlay.classList.remove("hidden");
     });
}

for (let i = 0; i < btnclose.length; i ++){
    btnclose[i].addEventListener("click", function(){
        modal[i].classList.add("hidden");
        overlay.classList.add("hidden");
    });
}

overlay.addEventListener("click", function(){
    for (let i = 0; i < modal.length; i ++){
        modal[i].classList.add("hidden");
    }
    overlay.classList.add("hidden");
}
)