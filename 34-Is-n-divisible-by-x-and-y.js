//Day 9/366

//https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript

const isDivisible = (n, x, y) => n % x === 0 && n % y === 0;

console.log(isDivisible(3, 3, 4));
console.log(isDivisible(12, 3, 4));
console.log(isDivisible(8, 3, 4));
console.log(isDivisible(38, 3, 4));
