'use strict';

// const adventurer = {
// 	name: "Timothy",
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"]
// }

// for (let i = 0; i < adventurer.belongings.length; i++){
//     console.log(adventurer.belongings[i])
// }


// const adventurer = {
// 	name: "Timothy",
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"],
// 	companion: {
// 		name: "Velma",
// 		type: "Bat",
//         companion: {
// 			name: "Tim",
// 			type: "Parasite",
//             belongings: ["SCUBA tank", "Rogan josh", "health insurance"],
// 		}  
// 	}
// }
// console.log(adventurer.companion.name)
// console.log(adventurer.companion.companion.name)
// console.log(adventurer.companion.companion.belongings[2])


// const movies = [ 
//     { title: "Tokyo Story" },  
//     { title: "Paul Blart: Mall Cop" }, 
//     { title: "L'Avventura" } 
// ];
// for (let i=0; i < movies.length; i++) {
// 	console.log(movies[i].title);
// }


// const foo = {
//     someMethod:()=>{
//         console.log('oh hai');
//     }
// };
// foo.someMethod();


class Character {
    constructor (name, age, eyes, hair, lovesCats = false, lovesDogs) {
      this.legs = 2;
      this.arms = 2;
      this.name = name;
      this.age = age;
      this.eyes = eyes;
      this.hair = hair;
      this.lovesCats = lovesCats;
      this.lovesDogs = lovesDogs || false;
    }
    greet (otherCharacter) {
        console.log('hi ' + otherCharacter + '!');
    }
    classyGreeting (otherClassyCharacter) {
        console.log('Greetings ' + otherClassyCharacter.name + '!');
    }
    setHair (hairColor) {
        this.hair = hairColor;
    }
    smite () {
        console.log('I smite thee you vile person');
    }
}
const you = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown', true, true);
const me = new Character('Arthur the Wavy', 32, 'brown', 'his waves be spinnin keep of the g for greatness');
// console.log(you);
// console.log(me)

// me.greet("you");
// me.smite();
you.greet("Lily");
// you.smite();
you.classyGreeting(me);
