const arr = [1, 2, 3];
console.log(arr.length);

arr.forEach((item) => console.log(item));

const modifiedArr = arr.map((item) => item * 2);
const filteredArr = arr.filter((item) => item < 2);

const slicedArr = arr.slice(1, 2);

const indexOfArr = arr.indexOf(2);

const pushedArr = arr.push(4);
const unshiftArr = arr.unshift(0);

const poppedArr = arr.pop();
const shiftedArr = arr.shift();
