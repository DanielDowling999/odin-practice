let user = {};
user.name = "John";
user.surname = "Smith";
console.log(user.name)
console.log(user.surname)
user.name = "Paul";
console.log(user.name)
console.log("name" in user)
delete user.name;
console.log("name" in user)