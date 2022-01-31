function monkeyCount(n) {
  const arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(i);
  }
  arr.shift()
  return arr;
}

// test
console.log(monkeyCount(8));
