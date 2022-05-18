function friend(friends) {
  return friends.filter((friend) => friend.length === 4);
}

// test
console.log(friend(['Ryan', 'Kieran', 'Mark']));
