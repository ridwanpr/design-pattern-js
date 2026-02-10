const createGuest = () => ({
  getName: () => "Guest",
  isAdmin: () => false,
  shouldTrack: () => false,
  getId: () => null,
});

const createUser = (user) => ({
  getName: () => user.name,
  isAdmin: () => user.role === "admin",
  shouldTrack: () => true,
  getId: () => user.id,
});

const renderDashboard = (rawUser) => {
  const user = rawUser ? createUser(rawUser) : createGuest();

  console.log(`Hello, ${user.getName()}`);
  console.log(
    user.isAdmin() ? "[BUTTON] Delete Database" : "[BUTTON] View Only",
  );

  if (user.shouldTrack()) {
    console.log(`Tracking visit for ID: ${user.getId()}`);
  }
};

const admin = { id: 101, name: "Alice", role: "admin" };
const regular = { id: 102, name: "Bob", role: "user" };
const guest = null;

renderDashboard(admin);
renderDashboard(regular);
renderDashboard(guest);
