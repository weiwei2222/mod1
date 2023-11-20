const adder = (x) => {
  console.log(`Returning an arrow function. Captured value of X = ${x}`);
  const arrow_fun = (y) => {
    console.log(`Calling the arrow function. X = ${x}, Y = ${y}`);
    return x + y;
  };
  return arrow_fun;
};

const add1 = adder(2);
console.log("Testing");
