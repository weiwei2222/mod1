'use strict';

let secretnumber = Math.trunc(Math.random()*20 +1)

console.log(secretnumber)

let score = 20;
document.querySelector(".check").addEventListener("click",function(){
    let guessnumber = document.querySelector(".guess").value;
    console.log(guessnumber, typeof guessnumber);
    if(guessnumber == ""){
        document.querySelector(".message").textContent = "Please in a number."
    }else if (guessnumber === secretnumber){
        document.querySelector(".message").textContent = "Corret number."
    }else if (guessnumber > secretnumber){
        document.querySelector(".message").textContent = "Too hight."
        score--;
        document.querySelector(".score").textContent = score;
    }else if (guessnumber < secretnumber){
        document.querySelector(".message").textContent = "Too low."
        score--;
        document.querySelector(".score").textContent = score;
    }
})