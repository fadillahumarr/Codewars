//Day 3/366

//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

const squareDigits = (num) =>
  Number(
    String(num)
      .split("")
      .map((num) => num ** 2)
      .join("")
  );

// const squareDigits = (num) => {
//   let str = String(num).split("");
//   let res1 = [];
//   str.forEach((i) => res1.push(i ** 2));
//   return Number(res1.join(""));
// };

console.log(squareDigits(3212));
