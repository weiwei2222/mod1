'use strict';

const attackbtnEl = document.querySelector('.attackbtn')
const retreatbtnEl = document.querySelector('.retreatbtn')
const showEl = document.querySelector('.show');
console.log(showEl);


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
			showEl.textContent = `You are attacking alien! Alien hull is ${alienShip[0].hull}.`;
			//console.log(alienships);
			if (alienShip[0].hull <= 0){
				alienships.splice(alienships[0],1,);
				console.log(alienships);
			}
		}else{
			showEl.textContent = 'You missed!';
		}
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
			console.log(`You got hit by alien!Your ship hull is ${myship.hull}.`);
			showEl.textContent = `You got hit by alien!Your ship hull is ${myship.hull}.`;
			if (this.hull <= 0){
				console.log('Alien ship is destroyed.');
			}
		}else{
			console.log('You are attacking alien!');
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

