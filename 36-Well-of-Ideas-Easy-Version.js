//Day 9/366

//https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript

const well = (x) => {
  const count = x.filter((x) => x == "good").length;
  return count < 1 ? "Fail" : count < 3 ? "Publish" : "I smell a series!";
};

// const well= (x) => {
//   let count = 0;
//   for (let i = 0; i < x.length; i++) {
//     if (x[i] === "good") {
//       count++;
//     }
//   }
//   if (count === 1 || count === 2) {
//     return "Publish";
//   } else if (count > 2) {
//     return "I smell a series!";
//   } else {
//     return "Fail!";
//   }
// }

console.log(well(["good", "bad", "bad", "bad", "bad"]));
console.log(well(["good", "bad", "bad", "good", "good"]));
console.log(well(["bad", "bad"]));
