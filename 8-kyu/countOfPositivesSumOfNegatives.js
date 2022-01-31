function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) return [];

  const arr = input.reduce(
    (acc, num) => {
      num > 0 && num !== 0 ? acc[0]++ : (acc[1] += num);
      return acc;
    },
    [0, 0]
  );
  return arr;
}

// test
console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
