function getAverage(marks) {
  return Math.trunc(marks.reduce((acc, num) => acc + num, 0) / marks.length);
}

// test
console.log(getAverage([2, 2, 2, 2]));
