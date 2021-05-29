let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];


function namify(users) {
  let userName = users.map(item => item.name);
  return userName;
}


alert(namify(users));
