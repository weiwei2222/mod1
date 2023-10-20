'use strict';

// Arrays & Control flow

// const quotes= ["life is beautiful.","live,love,laugh","the best is yet to come."]
// const randomThings = [1, 10, "Hello", true]
// randomThings[2] = "World";
// // console.log(randomThings)
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// ourClass[2] = "Sardines";
// ourClass.pop(); // The pop() method removes the last element from an array:
// ourClass.push("NEW element"); // The push() method adds a new element to an array (at the end):
// ourClass.splice(2,1) // delete ourClass[2]
// ourClass.shift() //The shift() method removes the first array element and "shifts" all other elements to a lower index.

// const ourClass = ["Salty", 1, "Sardine", "Slack", "Github"]
// console.log(ourClass)
// const reverseMyarray = ourClass.reverse();
// console.log(reverseMyarray)


// Write an if ... else if ... elsestatement:
// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".
// const usernumber = 6;
// if (usernumber < 5){
//     console.log("little number")
// }else if (usernumber > 10){
//     console.log("big number")
// }else{
//     console.log("monkey")
// }


const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)
console.log("Kristyn is rocking that" + kristynsCloset[2] + "today!")

kristynsCloset.splice(6,0,"raybans")
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset)

// Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
// ];
// thomsCloset.push("bracket notation");
// console.log(thomsCloset)
