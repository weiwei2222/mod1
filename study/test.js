/*
Split Strings

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

splitStrings('abc'); // should return ['ab', 'c_']
splitStrings('abcdef'); // should return ['ab', 'cd', 'ef'];

*/

// const testString = "abcde";
// function splitStrings(test) {
//   const result = [];
//   const a = test.slice();
//   console.log(a);
// }

// console.log(splitStrings(testString));

function splitStrings(string) {
  //declare empty array
  let newStringArray = [];
  //iterate through string
  //add two the count (i)
  for (let i = 0; i < string.length; i += 2) {
    //concat string at zero and next element and store in newString
    string[i + 1]
      ? newStringArray.push(string[i] + string[i + 1])
      : newStringArray.push(string[i] + "_");
  }
  //return string
  return newStringArray;
}

console.log(splitStrings("abc")); // should return ['ab', 'c_']
console.log(splitStrings("abcdef")); // should return ['ab', 'cd', 'ef'];
