//Day 9/366

//https://www.codewars.com/kata/5f70c883e10f9e0001c89673/train/javascript

// const flip = (d, a) =>
//   d === "R" ? a.sort((x, y) => x - y) : a.sort((x, y) => y - x);

const flip = (d, a) => {
  let swap = false;
  //Bubble Sort Ascending
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
        swap = true;
      }
    }
    if (!swap) break;
  }
  return d === "R" ? a : a.reverse();
};

console.log(flip("R", [3, 2, 1, 2]));
console.log(flip("L", [1, 4, 5, 3, 5]));
