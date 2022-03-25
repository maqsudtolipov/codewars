function descendingOrder(n) {
  return ('' + n).split('').sort((a, b) => b - a);
}

// test
console.log(descendingOrder(124358769));
