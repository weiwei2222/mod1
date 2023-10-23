'use strict';

const attackbtnEl = document.querySelector('.attackbtn')
const retreatbtnEl = document.querySelector('.retreatbtn')

class Ship {
	constructor(){
		this.hull = 20;
		this.firepower = 5;
		this.accuracy = 0.7;
	}
	attackAlien(){
		if (Math.random() < this.accuracy){
			console.log('You are attacking alien!');
		}else{
			console.log('You got hit by alien!');
			this.hull = this.hull - Alienships.firepower;
			if (this.hull <= 0){
				console.log('Your ship is destroyed.');
			}
		}
	}
}

class Alienship{
	constructor(){
		this.hull = Math.floor(Math.random() * 4) + 3;
		this.firepower = Math.floor(Math.random() * 3) + 2;
		this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
	}
	attackShip(){
		if (Math.random() > this.accuracy){
			console.log('You got hit by alien!');
			this.hull = this.hull - Ship.firepower;
			if (this.hull <= 0){
				console.log('Alien ship is destroyed.');
			}
		}else{
			console.log('You are attacking alien!');
		}
	}
}



const myship = new Ship();
const alienship = new Alienship();
myship.attackAlien()
alienship.attackShip()
