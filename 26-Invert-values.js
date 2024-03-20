//Day 8/366

//https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript

// const invert = (array) => array.map((i) => (Math.abs(i) ? -i : i));

//const invert = (array) => array.map((i) => -i);


const invert = (array) => {
    for(let i=0;i<array.length;i++){
        array[i]*=-1;
    }
    return array;
};

console.log(invert([1, 2, 3, 4, 5]));
console.log(invert([]));
console.log(invert([0]));
console.log(invert([1, -2, 3, -4, 5]));
