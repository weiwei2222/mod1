'use strict';

const attackbtnEl = document.querySelector('.attackbtn')
const retreatbtnEl = document.querySelector('.retreatbtn')

class Ship{
	constructor(name){
		this.name = name;
		this.hull = 20;
		this.firepower = 5;
		this.accuracy = 0.7;
	}
	attackAlien(alienships){
		if (Math.random() < this.accuracy){
			for (let i = 0; i < alienships.length; i ++){
				alienships[i].hull = alienships[i].hull - this.firepower;
				console.log(alienships[0]);
				console.log(`You are attacking alien! Alien hull is ${alienships[i].hull}`);
			}
			
			if (this.hull <= 0){
				console.log('You lost game.')
			}
		}else{
			console.log('You missed');
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
	alienships.push(alien)
}

myship.attackAlien(alienships)



// attackbtnEl.addEventListener('click',function(){

// })




