'use strict';

const btnRoll = document.querySelector(".btn--roll").textContent;// string
const dicPicture = document.querySelector(".dice");//object
dicPicture.classList.add("hidden")

const player0_currentscore = Number(document.getElementById("current--0").textContent);// number
const player1_currentscore = document.getElementById("current--1");
const btnhold = document.querySelector(".btn--hold")


console.log(player0_currentscore,typeof player0_currentscore) 
console.log(btnRoll, typeof btnRoll)
console.log(dicPicture, typeof dicPicture)