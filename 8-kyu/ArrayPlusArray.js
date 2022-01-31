function arrayPlusArray(arr1, arr2) {
  const newArr = arr1.concat(arr2).reduce((acc, cur) => acc + cur, 0);

  return newArr;
}

// test
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
