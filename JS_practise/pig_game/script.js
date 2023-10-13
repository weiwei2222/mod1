'use strict';

const btnRoll = document.querySelector(".btn--roll")//object
const dicPicture = document.querySelector(".dice");//object
dicPicture.classList.add("hidden")

const player0_currentscore = document.getElementById("current--0");//object
const player1_currentscore = document.getElementById("current--1");//object
const btnhold = document.querySelector(".btn--hold")

const player0_score = document.getElementById("score--0");//object
const player1_score = document.getElementById("score--1");//object
let player0_number =Number(player0_score.textContent); //number
let player1_number =Number(player1_score.textContent);

const activePlayer = document.getElementsByClassName(".player--active");
console.log(activePlayer, typeof activePlayer)

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
    }else{
        
    }
})

btnhold.addEventListener("click",function(){
    player0_number += currentscore;
    player0_score.textContent = player0_number;

})