function accum(s) {
  const result = s
    .toLowerCase()
    .split('')
    .map((num, i) => {
      const cap = num.at(0).toUpperCase();
      return cap;
    });
  return result;
}

// test
console.log(accum('abcd'));
