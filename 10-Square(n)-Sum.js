//Day 3/366

//https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

const squareSum = (numbers) => numbers.reduce((sum, num) => sum + num ** 2, 0);

// const squareSum = (numbers) => {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i] ** 2;
//   }
//   return sum;
// };

// const squareSum = (numbers) => {
//   let sum = 0;
//   numbers.forEach((n) => (sum += n * n));
//   return sum;
// };

console.log(squareSum([1, 2]));
console.log(squareSum([0, 3, 4, 5]));
console.log(squareSum([]));
