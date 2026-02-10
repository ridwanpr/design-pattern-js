class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  hasAccess() {
    return this.name === "Bob";
  }
}

const users = [new User(1, "Bob"), new User(2, "John")];

function getUsers(id) {
  return users.find((user) => user.id === id);
}

function printUser(id) {
  const user = getUsers(id);

  const name = user?.name || "Guest";
  console.log(`Hello ${name}`);

  if (user?.hasAccess?.()) {
    console.log("You have access");
  } else {
    console.log("You are not allowed here");
  }
}

printUser(1);
printUser(3);
