function basicOp(operation, value1, value2) {
  return eval(`${value1} ${operation} ${value2}`);
}

// test
console.log(basicOp('+', 4, 7));
