// arrays 
//  []
// arrays can hold any data typs and can can unlimited indexes
// arrays always begin at index 

// for (let counter = 0; counter < colors.length; counter++){
//     console.log(colors[counter])
// }
// let colors = ["red", "green", "yellow"]
// let cars = ["Nissan",colors]

// for (let i = 0; i < cars.length; i ++){
//     console.log(cars[i])
// }


//Exercise Write a for loop that iterates from 1 - 20. 
//Prints “prime” for all prime numbers, “even” for all even numbers, and “odd” for all odd numbers.
//Treat 2 as an even number and 1 & 3 as odd

// for (let i = 0; i <= 20; i ++){
//     if (i % 2 == 0){
//         console.log(i + " Even")
//     }else if (i % 2 == 1){
//         console.log(i + " Odd")
//     }
// }

for (let i = 2; i < 20; i ++){
    sum = true;
    for (j=2; j<i; j++){
        if (i%j == 0){
            sum = false;
        }
    }
    if (sum){
            console.log(i);
    }
}