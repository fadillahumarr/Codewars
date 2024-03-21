//Day 9/366

//https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript

const getDivisorsCnt = (n) => {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      n / i === i ? count++ : (count += 2);
    }
  }
  return count;
};

console.log(getDivisorsCnt(1));
console.log(getDivisorsCnt(10));
console.log(getDivisorsCnt(11));
console.log(getDivisorsCnt(54));
console.log(getDivisorsCnt(4));
console.log(getDivisorsCnt(15));
