function countSheeps(arr) {
  return arr.filter((sheep) => sheep).length;
}

// test
console.log(countSheeps([true, false, true, false, true]));
