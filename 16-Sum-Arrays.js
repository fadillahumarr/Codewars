//Day 5/366

//https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript


// Sum Numbers
// function sum (numbers) {
//     "use strict";
//     let total =0;
//     for(let i = 0; i< numbers.length; i++){
//         total += numbers[i];
//     }
//     return total;
// };


const sum = numbers => numbers.reduce((sum, num) => sum + num, 0); 

console.log(sum([]));
console.log(sum([1, 5.2, 4, 0, -1]));