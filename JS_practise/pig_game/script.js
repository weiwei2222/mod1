'use strict';

const btnRoll = document.querySelector(".btn--roll")//object
const dicPicture = document.querySelector(".dice");//object
dicPicture.classList.add("hidden")

const player = [];
player[0] = document.querySelector(".player--0");
player[1] = document.querySelector(".player--1");

const player_score = [];
player_score[0] = document.getElementById("score--0");//object
player_score[1] = document.getElementById("score--1");//object
const player_number = [];
player_number[0] = Number(player_score[0].textContent);
player_number[1] = Number(player_score[1].textContent);

const player_currentscore = [];
player_currentscore[0] = document.getElementById("current--0");//object
player_currentscore[1] = document.getElementById("current--1");//object
const btnhold = document.querySelector(".btn--hold")

let currentscore = 0;
let activePlayer = 0;

const updatePlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    // 0 -> 0 + 1 = 1 -> 1 % 2 = 1
    // 1 -> 1 + 1 = 2 -> 2 % 2 = 0
    activePlayer = (activePlayer + 1) % 2;
    currentscore = 0;
    
    // Update `.player--active` class on new active player.
    player[0].classList.toggle("player--active");
    player[1].classList.toggle("player--active");
}

btnRoll.addEventListener("click",function(){
    let dicnumber = Math.trunc(Math.random() * 6 +1);
    console.log(dicnumber)
    dicPicture.classList.remove("hidden")
    dicPicture.src = `dice-${dicnumber}.png`;
    if (player_number[activePlayer] >= 100){
        player[activePlayer].classList.remove("player--active");
        player[activePlayer].classList.add("player--winner");
    }else{
        if (dicnumber !== 1 ){
            currentscore += dicnumber;
            player_currentscore[activePlayer].textContent = currentscore;
        }else{
            updatePlayer()
        }
    }
    
})

btnhold.addEventListener("click",function(){
    player_number[activePlayer] += currentscore;
    player_score[activePlayer].textContent = player_number[activePlayer];
    updatePlayer()
})