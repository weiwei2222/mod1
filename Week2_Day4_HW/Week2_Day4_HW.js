'use strict';


//Use a loop to iterate through the numbers 1 through 16. 
//Push each number into fb, but push the string "fizz" in place of numbers divisible by 3, 
//"buzz" in place of numbers divisible by 5, 
//and "fizzbuzz" in place of numbers divisible by both 3 and 5.
//Log fb to the console to see the output.
//Hint: Check out the remainder/modulo operator: %.

// should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]
const fb = [];

for (let i = 1; i <= 16; i ++){
    fb.push(i)
    if (i%3==0 && i%5==0){
        fb.splice([i - 1],1,"fizzbuzz")
    }else if (i%3==0){
        fb.splice([i - 1],1,"fizz")
    }else if(i%5==0){
        fb.splice([i - 1],1,"buzz")
    }
}
console.log(fb)

