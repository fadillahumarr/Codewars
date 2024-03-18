//Day 4/366

//https://www.codewars.com/kata/58d248c7012397a81800005c/train/javascript

//const cubeChecker = (volume, side) => volume === side**3 && side > 0 ?true:false;
const cubeChecker = (volume, side) => volume === Math.pow(side, 3) && side > 0;

console.log(cubeChecker(8,2));
console.log(cubeChecker(8,3));
console.log(cubeChecker(-8,-2));
console.log(cubeChecker(  0, 0));
console.log(cubeChecker(  1, 5));
console.log(cubeChecker(  125, 5));