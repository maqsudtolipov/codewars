function find_average(array) {
  if (array.length === 0) return 0;
  return array.reduce((acc, num) => acc + num, 0) / array.length;
}

// test
console.log(find_average([1, 1, 1]));
