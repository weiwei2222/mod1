'use strict';

const attackbtnEl = document.querySelector('.attackbtn');
const retreatbtnEl = document.querySelector('.retreatbtn');
const showEl = document.querySelector('.show');
const show1El = document.querySelector('.show1');
const myhull = document.getElementById('current--0');
const alienhull = document.getElementById('current--1');
let playing = true;
let current = 0; 

class Ship{
	constructor(name){
		this.name = name;
		this.hull = 20;
		this.firepower = 5;
		this.accuracy = 0.7;
	}
	attackAlien(alien){
		console.log(alien.hull)
		if (Math.random() < this.accuracy){
			alien.hull -= this.firepower;
			showEl.textContent = `You are attacking alien!`;
			alienhull.textContent = `${alien.hull}`;
		}else{
			showEl.textContent = 'You missed!';
			alien.attackShip(this);
		}
	}
	retreat(){
		showEl.textContent = 'You retreat!Game over!';
		playing = false;
	}
	shipdie(){
		return this.hull <=0;
	}
}

class Alienship{
	constructor(){
		this.hull = Math.floor(Math.random() * 4) + 3;
		this.firepower = Math.floor(Math.random() * 3) + 2;
		this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
	}
	attackShip(myship){
		if (Math.random() < this.accuracy){
			myship.hull -= this.firepower;
			show1El.textContent = `You got hit by alien!`;
			myhull.textContent = `${myship.hull}`
		}else{
			show1El.textContent = `You got hit by alien!But alien missed.`;
		}
	}
	aliendie(){
		return this.hull <=0;
	}
}
const myship = new Ship('USS Assembly')
const alienshipsArray = [];
const imgList = [];
for (let i = 0; i < 6; i ++){
	const alien = new Alienship();
	alienshipsArray.push(alien);
}
myhull.textContent = myship.hull;
alienhull.textContent = alienshipsArray[0].hull;

const game = function(){
		if (playing){
			myship.attackAlien(alienshipsArray[current]);
			current ++ ;
			console.log(alienshipsArray[current]);
			if (alienshipsArray[current].hull <= 0){
				alienshipsArray[current].aliendie();
			}else if (alienshipsArray[current].hull > 0){
				alienshipsArray[current].attackShip(myship);
			}
			if (current >= 5 || myship.hull <= 0){
				playing = false;
				showEl.textContent = 'You win!';
			}
		}
}



attackbtnEl.addEventListener("click",game);

retreatbtnEl.addEventListener('click',function(){
	myship.retreat();
})