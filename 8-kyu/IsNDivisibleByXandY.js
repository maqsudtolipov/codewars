function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0 ? true : false;
}

// test
console.log(isDivisible(3, 3, 4));
