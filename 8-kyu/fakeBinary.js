function fakeBin(x) {
  const y = x.split('').map(num => num >= 5 ? 1 : 0).join('');
  return y;
}

// test
console.log(fakeBin('45385593107843568'));
