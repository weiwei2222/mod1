'use strict';

const btnRoll = document.querySelector(".btn--roll")
const dicPicture = document.querySelector(".dice");
dicPicture.classList.add("hidden")

const player0_currentscore = document.getElementById("current--0");
const player1_currentscore = document.getElementById("current--1");
const btnhold = document.querySelector(".btn--hold")


let player0_score_value = 0;
let player1_score_value = 0;

const player0_score = document.getElementById("score--0");
const player1_score = document.getElementById("score--1");
player0_score.textContent = player0_score_value;
player1_score.textContent = player1_score_value;

let currentscore = 0;
btnRoll.addEventListener("click",function(){
    let dicnumber = Math.trunc(Math.random() * 6 +1);
    console.log(dicnumber)
    dicPicture.classList.remove("hidden")
    dicPicture.src = `dice-${dicnumber}.png`;
    if (dicnumber !== 1){
        currentscore += dicnumber;
        player0_currentscore.textContent = currentscore;
        console.log(currentscore)
    }
})

btnhold.addEventListener("click",function(){
    player0_score_value += currentscore;
    player0_score.textContent = player0_score_value;
    currentscore = 0;

})