//Day 8/366

//https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

const sumArray = (array) => {
  if (!array || array.length <= 2) {
    return 0;
  } else {
    let max = Math.max(...array);
    let min = Math.min(...array);
    return array.reduce((sum, num) => sum + num) - max - min;
  }
};

// const sumArray = (array) => {
//   if (!array || array.length <= 2 ) {
//     return 0;
//   } else {
//     let max = array[0];
//     let min = array[0];
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] > max) {
//         max = array[i];
//       } else if (array[i] < min) {
//         min = array[i];
//       }
//       sum += array[i];
//     }
//     return sum - (max + min);
//   }
// };

console.log(sumArray([null]));
console.log(sumArray([]));
console.log(sumArray([3]));
console.log(sumArray([3, 5]));
console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([0, 1, 6, 10, 10]));
console.log(sumArray([-6, -20, -1, -10, -12]));
console.log(sumArray([-6, 20, -1, 10, -12]));
