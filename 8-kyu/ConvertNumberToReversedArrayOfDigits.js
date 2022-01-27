function digitize(n) {
  return n.toString().split('').reverse().map(n => n*1);
}

// test
console.log(digitize(48945546));
