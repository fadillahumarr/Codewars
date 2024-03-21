//Day9/366

//https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript

const countBy = (x, n) => Array.from({ length: n }, (_, k) => (k + 1) * x);

// const countBy = (x, n) => {
//   let z = [];
//   for (let i = 1; i <= n; i++) {
//     z.push(x*i);
//   }
//   return z;
// };

console.log(countBy(1, 10));
console.log(countBy(2, 5));
