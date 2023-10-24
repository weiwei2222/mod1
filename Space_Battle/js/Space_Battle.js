'use strict';

const attackbtnEl = document.querySelector('.attackbtn')
const retreatbtnEl = document.querySelector('.retreatbtn')
const showEl = document.querySelector('.show');
const show1El = document.querySelector('.show1');
console.log(show1El);


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
			showEl.textContent = `You are attacking alien! Alien hull is ${alienShip[0].hull} now.`;
			if (alienShip[0].hull <= 0){
				show1El.textContent = 'This Alien ship is destroyed.';
				alienships.splice(alienships[0],1,);
				console.log(alienships);
			}else{
				// setTimeout(alienships[0].attackShip(myship), 2000);
				alienships[0].attackShip(myship);
			}
		}else{
			showEl.textContent = 'You missed!';
		}
	}
	retreat(){
		showEl.textContent = 'You retreat!';
	}
}

class Alienship{
	constructor(){
		this.hull = Math.floor(Math.random() * 4) + 3;
		this.firepower = Math.floor(Math.random() * 3) + 2;
		this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
	}
	attackShip(myship){
		if (Math.random() > this.accuracy){
			myship.hull = myship.hull - this.firepower;
			show1El.textContent = `You got hit by alien!Your ship hull is ${myship.hull}.`;
		}
	}
}

const myship = new Ship('USS Assembly')
const alienships = [];
for (let i = 0; i < 6; i ++){
	const alien = new Alienship();
	alienships.push(alien);
}


attackbtnEl.addEventListener("click",function(){
	myship.attackAlien(alienships);
	
});

retreatbtnEl.addEventListener('click',function(){
	myship.retreat();
})