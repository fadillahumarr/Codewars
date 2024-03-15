//Day 3/366

//https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

// const positiveSum = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] > 0 ? (sum += arr[i]) : 0;
//   }
//   return sum;
// };

const positiveSum = (arr) =>
  arr.reduce((sum, num) => (num > 0 ? sum + num : sum), 0);

console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));
console.log(positiveSum([]));
console.log(positiveSum([-1, -2, -3, -4, -5]));
console.log(positiveSum([-1, 2, 3, 4, -5]));
