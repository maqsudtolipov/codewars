function grow(x) {
  return x.reduce((acc, num) => acc * num);
}

// test
console.log(grow([1, 2, 3, 4, 5, 6]));
