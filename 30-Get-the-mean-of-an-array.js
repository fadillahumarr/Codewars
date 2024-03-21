//Day 9/366

//https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

const getAverage = (marks) =>Math.floor(marks.reduce((sum, num) => sum+num,0)/marks.length);

// const getAverage = (marks) =>{
//     let sum = 0;
//     for(let i=0; i<marks.length;i++){
//         sum+=marks[i];
//     }
//     return Math.floor(sum/marks.length);
// };

console.log(getAverage([2, 2, 2, 2]));
console.log(getAverage([1, 2, 3, 4, 5]));
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));
