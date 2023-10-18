'use strict';

const btnmodal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnclose = document.querySelector(".close-modal")

const showup = function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}
const closeup = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}


for (let i = 0; i < btnmodal.length; i ++){
    console.log(btnmodal[i])
    btnmodal[i].addEventListener("click",showup)
}

btnclose.addEventListener("click",closeup)
overlay.addEventListener("click",closeup)
document.addEventListener("keydown",function(ek){
    if (ek.key === "Escape" && !modal.classList.contains("hidden")){
        closeup();
    }   
}
)