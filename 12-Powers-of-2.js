//Day 4/366

//https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript

function powersOfTwo(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(2 ** i);
  }
  return arr;
}

// const powersOfTwo = n => Array(n+1).fill(2).map((e,i) => e**i);

console.log(powersOfTwo(0));
console.log(powersOfTwo(1));
console.log(powersOfTwo(2));
console.log(powersOfTwo(3));
console.log(powersOfTwo(4));
