//Day 1/366

//https://www.codewars.com/kata/5b68c7029756802aa2000176/train/javascript


const logs = (x , a, b) => (Math.log(a) + Math.log(b)) / Math.log(x);

//const logs = (x , a, b) => (Math.log(a) + Math.log(b)) / Math.log(x);

console.log(logs(10, 2, 3));
console.log(logs(5, 2, 3));
console.log(logs(1000, 2, 3))