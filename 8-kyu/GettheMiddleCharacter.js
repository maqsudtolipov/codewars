function getMiddle(s) {
  const m = s.length % 2 === 0 ? s.length / 2 : (s.length - 1) / 2;
  return s.length % 2 === 0 ? s[m - 1] + s[m] : s[m];
}

// test
console.log(getMiddle('test'));
console.log(getMiddle('testing'));
console.log(getMiddle('middle'));
