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

//I google what is prime number. it show me"2, 3, 5, 7, 11, 13, 17, 19". 
for (let i = 2; i < 20; i ++){ // I want to find all number from 1 to 19 
    // console.log(i)it show me 1 to 19, means i = 2, i = 3, i = 4 and so on.
    sum = true; //but I don't which number is prime number, I assume it a prime number, it is true. 
    //let find out whether is true, which means find out whether it is prime number. So I use "For Loop" to check out 1 to 19
    for (j=2; j<i; j++){ // For example, i = 3, this line code will be j = 2; 2 < 3; 2++
        if (i%j == 0){ // and then this line code will be if (3%2 == 0), it can't be true, 3%2 should be == 1
            sum = false; // if i = 4, it will be j = 2; 2 < 4; 2++ , and then code will be  4%2 should be == 0, which means sum = false.
        }
    }
    if (sum){ // so i = 3   it is prime number, which means sum is true. 
            console.log(i); // if sume is true, let console i ,so if i = 3, will show 3 in the console.
    }
}

// for (counter =2; counter <=40; counter++){
//     if (counter % 2 != 0 && counter % counter == 0 && counter % 3 != 0 ){
//             console.log(counter + " " + "Prime")
//     }
// }
