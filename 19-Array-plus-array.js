//Day 5/366

//https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

// const arrayPlusArray = (arr1, arr2) => {
//   let sum = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     sum += arr1[i];
//   }
//   for (let j = 0; j < arr2.length; j++) {
//     sum += arr2[j];
//   }
//   return sum;
// };

const arrayPlusArray = (arr1, arr2) =>
  [...arr1, ...arr2].reduce((sum, num) => sum + num);

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]));
