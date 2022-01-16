function positiveSum(arr) {
  return arr.map(i => Math.abs(i));
}

console.log(positiveSum([1, -2, 3, 4, -5]));
