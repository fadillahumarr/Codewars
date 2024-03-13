//Challenge 360
// Day 1/366

//https://www.codewars.com/kata/5708f682c69b48047b000e07/train/javascript

// function multiply(number) {
//   const num = Math.abs(number).toString().length;
//   return number * Math.pow(5, num);
// }

const multiply = (number) => {
  return number * Math.pow(5, String(Math.abs(number)).length);
};

console.log(multiply(10));
console.log(multiply(5));
console.log(multiply(200));
console.log(multiply(0));
console.log(multiply(-2));
