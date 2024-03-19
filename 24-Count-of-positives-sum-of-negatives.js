//Day 8/366

//https://www.codewars.com/kata/576bb71bbbcf0951d5000044

// const countPositivesSumNegatives = (input) => {
//   return !(input && input.length)
//     ? []
//     : [
//         input.filter((i) => i > 0).length,
//         input.filter((j) => j < 0).reduce((sum, num) => sum + num, 0),
//       ];
// };

const countPositivesSumNegatives = (input) => {
  if ((input == null) | (input == 0)) {
    return [];
  } else {
    let positive = 0;
    let sumOfNegativeNumber = 0;
    for (let i = 0; i < input.length; i++) {
      input[i] < 0 ? (sumOfNegativeNumber += input[i]) : positive++;
    }
    return [positive, sumOfNegativeNumber];
  }
};

console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
);

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);

console.log(countPositivesSumNegatives([]));
console.log(countPositivesSumNegatives([-11, -50, 1, 10, 33, 0, 11, -1]));
