'use strict';

// const vehicle = ["blue", 4000, 1989];
// console.log(vehicle[1])

// const car = {
//     color: "blue",
//     hp:4000,
//     year:1989,
// }
// console.log(car.color)


// const house = {
// 	doors: 9
// }
// house.windows = 30;
// house.doors = 10;
// console.log(house)

// const weiwei = {
//     firstName: "Weiwei",
//     lastName: "Lin",
//     hairColor:"black",
//     hobbies:["Blogging", "Cooking", "Watching Movies"],
//     whetherMarried: true,
//     pet:{petName:"lucky",
//          petVariety:"cat",
//          petAge:3,}
// }
// weiwei.hairColor = "red";
// console.log(weiwei)

// const obj = {
// 	salutation: 'hi',
// 	count:4,
//     usercount:3,
// }
// if (obj.salutation === "hi") {
// 	console.log('ok');
// }

// for (let i = 0; i < obj.usercount; i++) {
// 	console.log(i);
// }

const user = {
	name:"Weiwei",
	email:"linweiwei2222@gamil.com",
	age:38,
	purchased:[],
}
user.class = "TWOC";
user.purchased.push("car","toy","hat","fruit")
user.purchased[1] = "skincare";
user.friend = {
	name:"Grace",
	age:43,
	location:"Columbus",
	purchased:[],
}
// user.friend.purchased.push("shoes","bread")

let friendpur = user.friend.purchased.length;
for (let i = 0; i < friendpur; i ++){
	console.log(user.friend.purchased[i]);
}

// function updateUser(){
// 	user.age ++;
// 	user.name = user.name.toUpperCase();
// }
// updateUser();

function oldAndLoud(person){
	person.age ++ ;
	person.name = person.name.toUpperCase();
}
oldAndLoud(user);
console.log(user)
