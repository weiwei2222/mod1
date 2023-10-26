'use strict';

const attackbtnEl = document.querySelector('.attackbtn');
const retreatbtnEl = document.querySelector('.retreatbtn');
const showEl = document.querySelector('.show');
const show1El = document.querySelector('.show1');
const myhull = document.getElementById('current--0');
const alienhull = document.getElementById('current--1');

class Ship{
	constructor(name){
		this.name = name;
		this.hull = 20;
		this.firepower = 5;
		this.accuracy = 0.7;
	}
	attackAlien(alienShip){
		if (Math.random() < this.accuracy){
			alienShip[0].hull = alienShip[0].hull - this.firepower;
			showEl.textContent = `You are attacking alien!`;
			alienhull.textContent = `${alienShip[0].hull}`;
			if (alienShip[0].hull <= 0){
				show1El.textContent = 'This Alien ship is destroyed.';
				alienshipsArray.splice(alienshipsArray[0],1,);
				console.log(alienshipsArray);
			}else if (alienShip[0].hull > 0){
				alienShip[0].attackShip(this);
			}
		}else{
			showEl.textContent = 'You missed!';
		}
	}
	retreat(){
		showEl.textContent = 'You retreat!Game over!';
		playing = false;
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
			myship.hull = myship.hull - this.firepower;
			show1El.textContent = `You got hit by alien!`;
			myhull.textContent = `${myship.hull}`
		}else{
			show1El.textContent = `You got hit by alien!But alien missed.`;
		}
	}
}
const myship = new Ship('USS Assembly')
const alienshipsArray = [];
for (let i = 0; i < 6; i ++){
	const alien = new Alienship();
	alienshipsArray.push(alien);
}

let playing = true;
myhull.textContent = myship.hull;
alienhull.textContent = alienshipsArray[0].hull;
attackbtnEl.addEventListener("click",function(){
	if (playing){
		myship.attackAlien(alienshipsArray);
		if (alienshipsArray == 0 || myship.hull <= 0){
			playing = false;
			showEl.textContent = 'You win!';
		}
	}
	
});

retreatbtnEl.addEventListener('click',function(){
	myship.retreat();
})