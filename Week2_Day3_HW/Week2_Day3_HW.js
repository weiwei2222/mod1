'use strict';


// Complete challenges:

// Challenge: For Loops
// Challenge: For Loops and Arrays
// Challenge: For Loops and Array Indices
// Challenge: For Loops - Calculating Array Elements

// There is Arrays, it show some random number. You have to pick 3 rondom for mynumber. 
// And these 3 number can't be same. Add these 3 number to newlist.
const mynumber = [2.99,54,-6,7,12.3,46,34,89,3]
let newlist = []
for (let i = 0; i < 3; i++){
    let randomnumber = Math.trunc(Math.random()*mynumber.length);
    let number = mynumber[randomnumber]
    mynumber.splice(randomnumber,1,)
    newlist.push(number)
}
console.log(newlist)
