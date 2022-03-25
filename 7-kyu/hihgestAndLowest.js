function highAndLow(numbers) {
  const numArr = numbers.split(' ');
  console.log(numArr)
  return `${Math.max(...numArr)} ${Math.min(...numArr)}`;
}

// test
console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'));
