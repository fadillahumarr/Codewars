//Day 3/366

//https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     let min = args[0];
//     for (let i = 0; i < args.length; i++) {
//       args[i] < min ? (min = args[i]) : min;
//     }
//     return min;
//   }
// }

class SmallestIntegerFinder {
  findSmallestInt = (args) => Math.min(...args);
}
let sif = new SmallestIntegerFinder();
console.log(sif.findSmallestInt([78, 56, 232, 12, 8]));
console.log(sif.findSmallestInt([78, 56, 232, 12, 18]));
console.log(sif.findSmallestInt([78, 56, 232, 12, 0]));
console.log(sif.findSmallestInt([1, 56, 232, 12, 8]));
