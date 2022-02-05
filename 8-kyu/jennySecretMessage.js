function greet(name) {
  return name === 'Johnny' ? 'Hello, my love!' : 'Hello, ' + name + '!';
}

// test
console.log(greet('Johnny'));
console.log(greet('Jonas'));
