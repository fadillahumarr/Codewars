//Day 6/366

//https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

const countSheeps = (sheep) => {
  let total = 0;
  [...sheep].map((count) => (count === true ? total++ : 0));
  return total;
};

// const countSheeps = (sheep) => {
//   let total = 0;
//   for (let i = 0; i < sheep.length; i++) {
//     if (sheep[i] == true) {
//       total++;
//     }
//   }
//   return total;
// };

// const countSheeps = (sheep) => sheep.filter(Boolean).length;

console.log(countSheeps([undefined, null, false, true]));
console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);
