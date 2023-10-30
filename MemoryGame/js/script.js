'use strict';

const cards = document.querySelectorAll('.memory-card');
const movesEl = document.getElementById('moves');
console.log(movesEl)

let checkFlip = false;
let firstCard, secondCard;
let moves = 0;

function flipCard() {
  this.classList.add('flip');
  if (!checkFlip){
    checkFlip = true;
    firstCard = this;
    console.log(firstCard);
    return
  }
  secondCard = this;
  checkFlip = false;
  console.log(secondCard);
  moves ++;
  movesEl.textContent = moves;
  console.log(movesEl);
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
}

function unflipCards() {
   setTimeout(() => {
     firstCard.classList.remove('flip');
     secondCard.classList.remove('flip');
   }, 1500);
}

(function shuffle(){
  cards.forEach(card => {
    let randomNum = Math.floor(Math.random() *16);
    card.style.order = randomNum;
    console.log(randomNum)
  } )
})()

cards.forEach(card => card.addEventListener('click', flipCard));

// for (let i = 0; i <cards.length; i ++){
//   cards[i].addEventListener('click', flipCard);
// }
