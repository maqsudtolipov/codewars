function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

// test
console.log(positiveSum([1, -2, 3, 4, 5]));
