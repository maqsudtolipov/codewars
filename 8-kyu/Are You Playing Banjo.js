function areYouPlayingBanjo(name) {
  // Implement me
  return name[0].toLowerCase() === 'r'
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

// test
console.log(areYouPlayingBanjo('Ringo'));
