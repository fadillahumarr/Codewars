//Day 2/366

//https://www.codewars.com/kata/56f699cd9400f5b7d8000b55/train/javascript


// const fixTheMeerkat = (arr) => `${arr[2]} ${arr[1]} ${arr[0]}`;

// const fixTheMeerkat = (arr) =>{
//     let tail = arr[0];
//     arr[0] = arr[2];
//     arr[2] = tail;
//     return arr;
// }

const fixTheMeerkat = (arr) => arr.reverse();

console.log(fixTheMeerkat(["tail", "body", "head"]), ["head", "body", "tail"]);
console.log(fixTheMeerkat(["bottom", "middle", "top"]), ["top", "middle", "bottom"]);