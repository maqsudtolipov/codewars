function invert(array) {
  const newArr = array.map((num) => -num);
  return newArr;
}

// test
console.log(invert([1, 2, 3, 4, 5]));
console.log(invert([1, -2, 3, -4, 5]));
