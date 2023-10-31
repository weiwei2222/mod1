'use strict';

const cards = document.querySelectorAll('.memory-card');
const movesEl = document.getElementById('moves');
const timer = document.getElementById('timer');
const reset = document.getElementById('reset');
document.body.onload = shuffle();

let checkFlip = false;
let firstCard, secondCard;
let lockCard = false;
let moves = 0;
let seconds = 0;
let minutes = 0;
let playing = true;

function resetGame(){
  cards.forEach(card => card.classList.remove('flip'));
  reset2Cords()
  moves = 0;
  movesEl.textContent = moves;
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
  console.log(moves);
  movesEl.textContent = moves;
  checkMatch()
}

function checkMatch(){
  if (firstCard.dataset.animal === secondCard.dataset.animal){
    console.log(firstCard.dataset.animal)
    console.log(secondCard.dataset.animal)
    console.log('match')
    disableCards();
    return;
  }
  unflipCards();
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
  }, 500);
}

function shuffle(){
  cards.forEach(card => {
    let randomNum = Math.floor(Math.random() *16);
    card.style.order = randomNum;
  } )
}


while(moves >= 1){
    console.log(moves);
    setInterval(updateTimer, 1000);
}// ??????

function updateTimer(){
  seconds ++;
  if (seconds === 60){
    seconds = 0;
    minutes ++;
  }
  timer.textContent = `${minutes} : ${seconds}`;
}
// setInterval(updateTimer, 1000);


cards.forEach(card => card.addEventListener('click', flipCard));
// for (let i = 0; i <cards.length; i ++){
//   cards[i].addEventListener('click', flipCard);
// }
reset.addEventListener('click',resetGame)