function squareSum(nums) {
  return nums.reduce((acc, num) => acc + num ** 2, 0);
}

// test
console.log(squareSum([1, 2, 2]));
