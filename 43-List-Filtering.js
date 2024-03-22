//Day 11/366

//https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript

const filter_list = (l) => l.filter((i) => typeof i === "number");

// const filter_list = (l) => {
//   let result = [];
//   for (let i = 0; i < l.length; i++) {
//     if (typeof l[i] === "number") {
//       result.push(l[i]);
//     }
//   }
//   return result;
// };

console.log(filter_list([1, 2, "aasf", "1", "123", 123]));
