//Day 8/366

//https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

// const grow = (x) => x.reduce((sum, num)=> sum*=num);

const grow = (x) => {
  let sum = 1;
  for (let i = 0; i < x.length; i++) {
    sum *= x[i];
  }
  return sum;
};


console.log(grow([1, 2, 3]));
console.log(grow([4, 1, 1, 4, 2]));
console.log(grow([2, 2, 2, 2, 2]));
