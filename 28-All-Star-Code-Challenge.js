//Day 8/366

//https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript

const strCount = (str, letter) => {
  let count =0;
  for(let i=0; i<str.length;i++){
    if(str[i]===letter){
      count++;
    }
  }
  return count;
};

// const strCount = (str, letter) => str.split(letter).length - 1;

// const strCount = (str, letter) => {
//   let sum = 0;
//   let arr = Array.from(str);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === letter) {
//       sum++;
//     }
//   }
//   return sum;
// };

console.log(strCount("Hello", "o"));
console.log(strCount("Hello", "l"));
console.log(strCount("", "z"));
