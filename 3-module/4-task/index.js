let user1 = {
  "balance": "$1,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 21,
  "name": "Golden Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};
let user2 = {
  "balance": "$1,490.15",
  "picture": "https://placehold2.it/32x32",
  "age": 38,
  "name": "Duncan Randall",
  "gender": "male",
  "greeting": "Hello, Duncan Randall! You have 17 unread messages.",
  "favouriteFruit": "apple"
};
let users = [user1, user2];

function showSalary(users, age) {
return users
  .filter((user) => user.age <= age)
  .map( (user) => (`${user.name}, ${user.balance}`) )
  .join('\n');
};

console.log(showSalary(users, 50));