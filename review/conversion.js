// let pie = "3.14";
// console.log(Number(pie),typeof Number(pie))
// console.log(parseInt(pie))
// console.log(parseFloat(pie))

let user = "5";
if (user == Number){
    console.log(user)
}else if (user != Number){
    console.log(`input a number.`)
}

console.log(5 + null)    // returns 5         because null is converted to 0
console.log("5" + null)  // returns "5null"   because null is converted to "null"
console.log("5" + 2)     // returns "52"      because 2 is converted to "2"
console.log("5" - 2)     // returns 3         because "5" is converted to 5
console.log("5" * "2")   // returns 10        because "5" and "2" are converted to 5 and 2
console.log("5" / 2)     // returns 2.5
console.log(2 + "5")     // returns "25"
console.log(2 / "5")     // returns 0.4

// 0
// -0
// null
// ""
// false
// undefined
// NaN

