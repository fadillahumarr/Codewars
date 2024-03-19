//Day 7/366

//https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript

// const findMultiples = (integer, limit) => {
//   let arr = [];
//   for (let i = integer; i <= limit; i+=integer) {
//     arr.push(i);
//   }
//   return arr;
// };

const findMultiples = (integer, limit) =>
  Array.from({ length: ~~(limit / integer) }, (a, i) => i * integer + integer);

console.log(findMultiples(5, 25));
