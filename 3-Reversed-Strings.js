//Day 1/366

//https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

// const solution = str => [...str].reverse().join('');

// const solution = (str) => {
//     let result = '';
//     for(let i = str.length-1; i >= 0; i--){
//         result += str[i];
//     }
//     return result;
// }

const solution = (str) => str.split("").reverse().join("");

console.log(solution("Hello World"));
