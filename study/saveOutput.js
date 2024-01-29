/*
Create a function saveOutput that accepts a function (that will accept one argument), 
and a string (that will act as a password). saveOutput will then return a function 
which takes in a string and behaves exactly like the passed-in function, except for 
when the password string is passed in as an argument. When this happens, 
the returned function will return an object with all previously passed-in arguments as keys, 
and the corresponding outputs as values
*/
// Example:

// input: define a function saveOutput that takes a callback and a string
// output : function that acts as the cb function except when the password is passed in

// create saveOutput
function saveOutput(cb, password) {
  //create an object that acts memory storage
  const result = {};
  //create a return function
  return function (input) {
    // passed in value is either an argument for the cb function or it is the password
    if (input !== password) {
      // arg for callback, not pw
      // store key value pair in result and return result of cb
      result[input] = cb(input);
      return result[input];
    }
    // arg is pw
    return result;
  };
}

const multiplyBy2 = (num) => num * 2;

const addS = (str) => str + "s";
const multBy2AndLog = saveOutput(multiplyBy2, "boo");
console.log(multBy2AndLog(2)); //->  4
console.log(multBy2AndLog(9)); //-> 18
console.log(multBy2AndLog("boo")); // -> { 2: 4, 9: 18 }
