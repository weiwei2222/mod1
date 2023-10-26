'use strict';

const btnRoll = document.querySelector(".btn--roll")//object
const dicPicture = document.querySelector(".dice");//object
dicPicture.classList.add("hidden");

const player = [];
player[0] = document.querySelector(".player--0");
player[1] = document.querySelector(".player--1");

const player_score = [];
player_score[0] = document.getElementById("score--0");//object
player_score[1] = document.getElementById("score--1");//object
let player_number = [];
player_number[0] = Number(player_score[0].textContent);
player_number[1] = Number(player_score[1].textContent);

const player_currentscore = [];
player_currentscore[0] = document.getElementById("current--0");//object
player_currentscore[1] = document.getElementById("current--1");//object
const btnhold = document.querySelector(".btn--hold");
const newGame = document.querySelector(".btn--new");

let currentscore = 0;
let activePlayer = 0;
let playing = true;

newGame.addEventListener("click",function(){
    playing = true;
    console.log("new")
    currentscore = 0;
    activePlayer = 0;
})

const updatePlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    // 0 -> 0+1 = 1 -> 1%2 = 1
    // 1 -> 1+1 = 2 -> 2%2 = 0
    activePlayer = (activePlayer + 1) % 2;
    currentscore = 0;
    
    // Update `.player--active` class on new active player.
    player[0].classList.toggle("player--active");
    player[1].classList.toggle("player--active");
}

btnRoll.addEventListener("click",function(){
    if (playing){
        let dicnumber = Math.trunc(Math.random() * 6 +1);
        console.log(dicnumber)
        dicPicture.classList.remove("hidden")
        dicPicture.src = `img/dice-${dicnumber}.png`;
        if (dicnumber !== 1 ){

        }else{
            updatePlayer()
       }
    }
})

btnhold.addEventListener("click",function(){
    if (playing){

        // if (){

        // }
        updatePlayer()
    }
})

