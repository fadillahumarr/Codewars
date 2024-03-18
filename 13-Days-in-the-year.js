//Day 4/366

//https://www.codewars.com/kata/56d6c333c9ae3fc32800070f/train/javascript

// const yearDays = (year) => {
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         return `${year} has 366 days`;
//       } else {
//         return `${year} has 365 days`;
//       }
//     } else {
//       return `${year} has 366 days`;
//     }
//   } else {
//     return `${year} has 365 days`;
//   }
// };

const yearDays = (year) => {
  let days = year % 4 ? 365 : year % 100 ? 366 : year % 400 ? 365 : 366;
  return `${year} has ${days} days`;
};

console.log(yearDays(0));
console.log(yearDays(-64));
console.log(yearDays(2016));
console.log(yearDays(1974));
console.log(yearDays(-10));
console.log(yearDays(666));
console.log(yearDays(1857));
