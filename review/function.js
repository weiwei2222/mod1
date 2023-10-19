'use strict';

// function sayhello(name){
//     console.log("hello "+ name + "!")
// }

// let name = "Weiwei"
// let sayhello = function(name){
//     console.log("hello "+ name + "!")
// }

// let sayhello = (name) => {
//     console.log("hello "+ name + "!")
// }

// const sayhello = (name) => console.log("hello "+ name + "!")


// function computeAreausing(width,height){
//      const area = width * height;
//      return `area of rectangle with width = ${width} and height = ${height} has area ${area} square units.`
// }
// console.log(computeAreausing(3,6))

// const planeHasWater = function(planet){
//     if (planet == "Earth" || planet == "Mars"){
//         return `This planet has water.`
//     }else{
//         return `This planet doesn't have water.`
//     }
// }
// console.log(planeHasWater("Earth"))
// console.log(planeHasWater("Moon"))

// function setColor(color = 'blue') {
// 	console.log(color)
// }

// setColor('red');

// var a = ['red', 'green', 'blue'];
// a.forEach(function(color) {
//   console.log(color);
// });
// a.forEach(color => console.log(color))

// function isVowel(letter){
//     letter = letter.toLowerCase();
//     if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
//         console.log("it is true")
//     }else{
//         console.log("it is false")
//     }
// }
// isVowel("B")

// function getMultipleLengths(str){
//     let retArr = []
//     for (let i = 0; i < str.length; i ++){
//         retArr.push(str[i].length);
//     }
//     return retArr;
// }
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));




// function maxOfThree(usernumber){
//     let maxNumber = usernumber[0];
//     let minNumber = usernumber[0];
//     for (let i = 1; i < usernumber.length; i ++){
//         let currentnumber = usernumber[i];
//         if (currentnumber > maxNumber){
//             maxNumber = usernumber[i];
//         }
//         if (currentnumber < minNumber ){
//             minNumber = usernumber[i];
//         }
//     }
//     console.log(maxNumber, minNumber);
// }
// maxOfThree([6, 9, 1, 3]);


function printLongestWord(arr) {
    let word = "";
    for (let i = 0; i < arr.length; i++) {
      if (word.length < arr[i].length) {
        word = arr[i];
      }
    }
    return word;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));