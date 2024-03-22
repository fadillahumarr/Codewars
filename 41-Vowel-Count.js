//Day 11/366

//https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

// const getCount = (str) => (str.match(/[aiueo]/ig)||[]).length;

const getCount = (str) => {
  let vowels = ["a", "i", "u", "e", "o"];
  return str.split("").filter((letter) => {
    return vowels.includes(letter) ? true : false;
  }).length;
};

// const getCount = (str) => {
//   let count = 0;
//   let newStr = str.split("");
//   for (let i = 0; i < newStr.length; i++) {
//     if (
//       newStr[i] == "a" ||
//       newStr[i] == "i" ||
//       newStr[i] == "u" ||
//       newStr[i] == "e" ||
//       newStr[i] == "o"
//     ) {
//       count++;
//     }
//   }
//   return count;
// };

console.log(getCount("abracadabra"));
console.log(getCount("nurfadillah umar"));
