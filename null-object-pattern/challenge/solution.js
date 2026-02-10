function createGuest() {
  return {
    getName: function () {
      return "Guest";
    },

    renderButtons: function () {
      console.log(" [BUTTON] View Only");
    },

    track: function () {},
  };
}

function createUser(user) {
  return {
    getName: function () {
      return user.name;
    },

    renderButtons: function () {
      if (user.role === "admin") {
        console.log(" [BUTTON] Delete Database");
      } else {
        console.log(" [BUTTON] View Only");
      }
    },

    track: function () {
      console.log(`Tracking visit for ID: ${user.id}`);
    },
  };
}

function getUser(rawUser) {
  if (!rawUser) {
    return createGuest();
  } else {
    return createUser(rawUser);
  }
}

function renderDashboard(rawUser) {
  const user = getUser(rawUser);

  console.log(`Hello, ${user.getName()}`);

  user.renderButtons();
  user.track();
}

const admin = { id: 101, name: "Alice", role: "admin" };
const regular = { id: 102, name: "Bob", role: "user" };
const guest = null;

renderDashboard(admin);
renderDashboard(regular);
renderDashboard(guest);
