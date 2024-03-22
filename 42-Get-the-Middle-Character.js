//Day 11/366

//https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

// const getMiddle = (s) =>
//   s.length % 2 === 0
//     ? `${s[s.length / 2 - 1]}${s[s.length / 2]}`
//     : s[Math.floor(s.length / 2)];

const getMiddle = (s) => {
  if (s.length % 2 === 0) {
    return `${s[s.length / 2 - 1]}${s[s.length / 2]}`;
  } else {
    return s[Math.floor(s.length / 2)];
  }
};

console.log(getMiddle("middle"));
console.log(getMiddle("test"));
console.log(getMiddle("testing"));
