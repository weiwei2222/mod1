"use strict";

const nums = [1, 2, 3, 4];
let initialValue = 0;
const addReducer = (acc, item) => {
  return acc + item;
};
const total = nums.reduce(addReducer, initialValue);

const multipRuducer = (acc, item) => {
  if (initialValue === 0) {
    return (initialValue = 1);
  }
  return acc * item;
};
const multipNum = nums.reduce(multipRuducer, initialValue);
console.log(multipNum);
