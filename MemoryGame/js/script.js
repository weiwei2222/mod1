'use strict';

const cards = document.querySelectorAll('.memory-card');
const movesEl = document.getElementById('moves');
const timerEl = document.getElementById('timer');
const reset = document.getElementById('reset');
let checkFlip = false;
let firstCard, secondCard;
let lockCard = false;
let moves = 0;
let seconds = 0;
let minutes = 0;
let timer = false;
let match = 0;

document.body.onload = shuffle();

function resetGame(){
  cards.forEach(card => card.classList.remove('flip'));
  cards.forEach(card => card.addEventListener('click', flipCard));
  match = 0;
  console.log(match);
  moves = 0;
  movesEl.textContent = moves;
  clearInterval(timer);
  timerEl.textContent = 0;
  seconds = 0;
  minutes = 0;
  shuffle();
}

function reset2Cords(){
  [checkFlip, lockCard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function flipCard() {
  if (lockCard) return;
  if (this === firstCard) return;
  this.classList.add('flip');
  if (!checkFlip){
    checkFlip = true;
    firstCard = this;
    return;
  }
  secondCard = this;
  checkFlip = false;
  moves ++;
  movesEl.textContent = moves;
  if (moves == 1){
    timer = setInterval(updateTimer, 1000);
  }
  checkMatch();
}

function checkMatch(){
  if (firstCard.dataset.animal === secondCard.dataset.animal){
    match ++;
    if (match == 8){
      clearInterval(timer);
    }
    disableCards();
    return;
  }else{
    unflipCards();}
}

function disableCards() {
   firstCard.removeEventListener('click', flipCard);
   secondCard.removeEventListener('click', flipCard);
   reset2Cords();
}

function unflipCards() {
  lockCard = true;
  setTimeout(() => {
     firstCard.classList.remove('flip');
     secondCard.classList.remove('flip');
     reset2Cords();
  }, 1000);
}

function shuffle(){
  cards.forEach(card => {
    let randomNum = Math.floor(Math.random() *16);
    card.style.order = randomNum;
  } );
}

function updateTimer(){
  seconds ++;
  if (seconds === 60){
    seconds = 0;
    minutes ++;
  }
  timerEl.textContent = `${minutes} : ${seconds}`;
}

cards.forEach(card => card.addEventListener('click', flipCard));
// for (let i = 0; i <cards.length; i ++){
//   cards[i].addEventListener('click', flipCard);
// }
reset.addEventListener('click',resetGame)