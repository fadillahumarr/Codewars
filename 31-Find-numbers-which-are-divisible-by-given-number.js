//Day 9/366

//https://www.codewars.com/kata/55edaba99da3a9c84000003b/train/javascript

const divisibleBy = (numbers, divisor) =>
  numbers.filter((i) => i % divisor === 0);

// const divisibleBy = (numbers, divisor) => {
//     let arr=[];
//     for(let i=0;i<numbers.length;i++){
//         if(numbers[i] % divisor === 0){
//             arr.push(numbers[i]);
//         }
//     }
//     return arr;
// };

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 3));
console.log(divisibleBy([0], 4));
