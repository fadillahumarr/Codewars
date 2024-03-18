//Day 4/366

//https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

// const century = (year) => {
//   if (year % 100 != 0) {
//     return Math.ceil(year / 100);
//   }
// };

const century = (year) => (year % 100 != 0 ? Math.ceil(year / 100) : 0);

console.log(century(1705));
console.log(century(1905));
console.log(century(85));
console.log(century(1705));
console.log(century(1705));
console.log(century(0));
