const createGuest = () => {
  const getName = () => "Guest";
  const renderButtons = () => console.log("[BUTTON] View Only");
  const track = () => {};

  return { getName, renderButtons, track };
};

const createUser = (user) => {
  const getName = () => user.name;
  const renderButtons = () =>
    user.role === "admin"
      ? console.log(" [BUTTON] Delete Database")
      : console.log("[BUTTON] View Only");
  const track = () => console.log(`Tracking visit for ID: ${user.id}`);

  return { getName, renderButtons, track };
};

const getUser = (rawUser) => {
  if (!rawUser) {
    return createGuest();
  } else {
    return createUser(rawUser);
  }
};

const renderDashboard = (rawUser) => {
  const user = getUser(rawUser);

  console.log(`Hello, ${user.getName()}`);
  user.renderButtons();
  user.track();
};

const admin = { id: 101, name: "Alice", role: "admin" };
const regular = { id: 102, name: "Bob", role: "user" };
const guest = null;

console.log("--- Admin ---");
renderDashboard(admin);

console.log("\n--- Regular ---");
renderDashboard(regular);

console.log("\n--- Guest ---");
renderDashboard(guest);
