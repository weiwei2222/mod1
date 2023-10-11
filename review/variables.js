// In JavaScript, comments are written with two forward slashes
// Comment statements do not get executed

// PROGRAMMING LANGUAGES
// Compiled languages are converted into machine code that the processor can execute.
// Analogy: Grandma's famous recipe written in Korean. Let's say we don't speak Korean, there are two ways for us to be able to follow directions.
// One way: translate Korean to English. This is example of compiled version.
// Second way: We have a friend that speaks Korean. This friend will be right next to us, walking us through the recipe STEP BY STEP. This is equivalent to an interpreter version of the recipe


// Video: https://www.youtube.com/watch?v=3iLUls6Z_tw

// VARIABLES
// History: For many years JavaScript only had "var" variables. In 2015 ECMAScript2015 or ES6, let and const were introduced. Scope involves the accessibility of variables and functions at any time in the code. Block scope is considered better to reduce accidentally changing values of variables.

// Declaring variables
// In many programming languages, semicolons are required.

// DECLARE FRUIT

// Assigning a value to fruit

// Second way

// Print fruit

// LET

// CONST

// DATA TYPES
// There are two types of data types in JS, primitive and reference data types.
// Primitive data types are the lowest level of implementation of a programming language. They don't come with methods and are not considered objects. They can ONLY represent a single value.
// Reference data types are dynamic, and don't have a fixed size. In JS, these are called objects which include built in methods. Examples: arrays, functions, ad all other objects. Reference types can contain ANY number of primitive values or other objects. Hint: If it holds more than one value, it is a reference data type. EVERYTHING IN JAVASCRIPT except primitive data types are OBJECTS.

let x; // this variable is unfind
let usernumber = 20; // this is number
let userword = "33"; // this string
let user = true; // this is boolean
let y = null; // this is object
let fruit = ["apple"," pear", "bananer"] // this is object
let numberlist = [21,45,-4,1.4] // this is object 
let student ={
    name:"Jack",
    age :20,
    score: 88,
}  // this is object

// console.log(x, typeof x)
// console.log(usernumber,typeof usernumber)
// console.log(userword, typeof userword)
// console.log(user,typeof user)
// console.log(y, typeof y)
// console.log(fruit,typeof fruit)
// console.log(numberlist, typeof numberlist)
console.log(student,typeof student)
console.log(`His name is ${student.name},his age is ${student.age},his score is ${student.score}!`)
