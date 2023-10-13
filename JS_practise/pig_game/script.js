'use strict';

const btnRoll = document.querySelector(".btn--roll")
const dicPicture = document.querySelector(".dice");
dicPicture.classList.add("hidden")

const player0_currentscore = document.getElementById("current--0");//string
const player1_currentscore = document.getElementById("current--1");
const btnhold = document.querySelector(".btn--hold")

const player0_score = Number(document.getElementById("score--0").textContent);
console.log(player0_score,typeof player0_score)
const player1_score = document.getElementById("score--1");
//let player0_number =Number(player0_score.textContent); //number
//let player1_number =Number(player1_score.textContent);

let currentscore = 0;
console.log(currentscore,typeof currentscore)
btnRoll.addEventListener("click",function(){
    let dicnumber = Math.trunc(Math.random() * 6 +1);
    console.log(dicnumber)
    dicPicture.classList.remove("hidden")
    dicPicture.src = `dice-${dicnumber}.png`;
    if (dicnumber !== 1){
        currentscore += dicnumber;
        player0_currentscore.textContent = currentscore;
    }
})

btnhold.addEventListener("click",function(){
    player0_score = player0_score + currentscore;
    console.log(player0_score,typeof player0_score)
})