function century(year) {
  return Math.ceil(year / 100);
}

// test
console.log(century(1705));
console.log(century(1900));
