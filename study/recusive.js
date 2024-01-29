/*
Create a recursive function that takes two parameters and repeats the string n number of times. 
The first parameter txt is the string to be repeated and the second parameter is the number of times the string is to be repeated.

String.prototype.repeat() is not allowed */

// creaate function
// input:

// repetition("ab", 3) ➞ "ababab"
// repetition("kiwi", 1) ➞ "kiwi"
// repetition("cherry", 2) ➞ "cherrycherry"

// function repetition(str, number, newString) {
//   if (number <= 0) {
//     return newString;
//   }
//   newString = newString.concat(string);
//   return repetition(str, number - 1, newString);
// }

//I str, num
//O str
function repetition(str, num) {
  // B: if becomes 1 return str;
  if (num <= 1) return str;
  // R: decrement num
  num--;
  // R: return concat str + function
  return str + repetition(str, num);
}

console.log(repetition("ab", 3));
