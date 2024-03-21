//Day 10/366

//https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

// const removeChar = (str) => str.slice(1,-1);

//const removeChar = (str) => str.substring(1,str.length-1);

// const removeChar = (str) => {
//   let newStr = str.split("");
//   newStr.pop();
//   newStr.shift();
//   return newStr.join("");
// };

const removeChar = (str) => {
  let newStr = "";
  for (let i = 1; i < str.length - 1; i++) {
    newStr += str[i];
  }
  return newStr;
};

console.log(removeChar("eloquent"));
