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

const obj = {
	salutation: 'hi',
	count:4,
    usercount:3,
}
if (obj.salutation === "hi") {
	console.log('ok');
}

for (let i = 0; i < obj.usercount; i++) {
	console.log(i);
}