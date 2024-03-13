//Day 1/366

//https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

// const points = (games) => {
//   let totalPoints = 0;
//   games.forEach((item) => {
//     let [x, y] = item.split(":").map(Number);
//     if (x > y) {
//       totalPoints += 3;
//     } else if (x < y) {
//       totalPoints += 0;
//     } else {
//       totalPoints += 1;
//     }
//   });
//   return totalPoints;
// };

// const points = (games) => {
//   let totalPoints = 0;
//   games.map((item) => {
//     let [x, y] = item.split(":").map(Number);
//     if (x > y) {
//       totalPoints += 3;
//     } else if (x < y) {
//       totalPoints += 0;
//     } else {
//       totalPoints += 1;
//     }
//   });
//   return totalPoints;
// };

const points = games => games.reduce((sum, [x, , y]) => sum + (x > y ? 3 : x == y), 0)

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);
console.log(
  points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])
);
console.log(
  points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"])
);
