'use strict';

// Challenge: For Loops
// Using a for loop, decrement countDown by one each time the loop runs until it equals 0,
// making use of looping functionality instead of logging each number separately.
let countDown = 10;
for (let i = 0; i < 10; i ++){
  countDown --
}
console.log(countDown)




// Challenge: For Loops and Arrays
const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];
// 1.
// Loop through the synonyms array. Each time, push a string into the greetings array. 
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE
for (let i = 0; i < synonyms.length; i ++){
    greetings.push(`Have a ${synonyms[i]} day!`)
}
// 2. 
// Loop through the greetings array, logging each greeting to the console:
// 'Have a fantastic day!'
// 'Have a wonderful day!'
// 'Have a great day!'
// ADD CODE HERE
for (let i = 0; i < greetings.length; i ++){
    console.log(`Have a ${greetings[i]} day!`)
}



// Challenge: For Loops and Array Indices
const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];
const bios = [];
// Loop through your arrays and store the following strings in the bios array:
// 'My name is Jon Snow and I am from The Wall'
// 'My name is Arya Stark and I am from Winterfell'
// 'My name is Jamie Lannister and I am from Kings Landing'
for (let i = 0; i < firstNames.length; i ++){
    for (let i = 0; i < lastNames.length; i ++){
        for (let i = 0; i < places.length; i ++){
            bios[i] = `My name is ${firstNames[i]} ${lastNames[i]} and I am from ${places[i]}`
        }
    }
}
console.log(bios)





// Challenge: For Loops - Calculating Array Elements
const increaseByTwo = [1, 2, 3, 4, 5];
// Uncomment the line below to check your work!
// console.log(increaseByTwo); // -> should print [3, 4, 5, 6, 7];
for (let i = 0; i < increaseByTwo.length; i ++){
    increaseByTwo[i] += 2;
}
console.log(increaseByTwo)