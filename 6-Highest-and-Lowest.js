//Day 2/366

//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

// const highAndLow = (numbers) => {
//   let numberArr = numbers.split(" ").map((num) => parseInt(num));
//   let max = numberArr[0];
//   let min = numberArr[0];
//   for (let i = 1; i < numberArr.length; i++) {
//     numberArr[i] > max
//       ? (max = numberArr[i])
//       : numberArr[i] < min
//       ? (min = numberArr[i])
//       : 0;
//   }
//   return `${max} ${min}`;
// };

const highAndLow = (numbers)=>{
    let numberArr = numbers.split(" ");
    return `${Math.max(...numberArr)} ${Math.min(...numberArr)}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
console.log(highAndLow("1 2 3"));