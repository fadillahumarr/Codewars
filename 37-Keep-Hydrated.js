//Day 10/366

//https://www.codewars.com/kata/582cb0224e56e068d800003c/train/javascript

const litres = (time) => (time * 0.5) | 0;

// const litres = (time) => Math.floor(time/2);

console.log(litres(2));
console.log(litres(1.4));
console.log(litres(12.3));
console.log(litres(0.82));
console.log(litres(11.8));
console.log(litres(1787));
