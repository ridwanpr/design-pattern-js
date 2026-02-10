function renderDashboard(user) {
  // 1. Handle Name
  let greetingName = "Guest";
  if (user && user.name) {
    greetingName = user.name;
  }
  console.log(`Hello, ${greetingName}!`);

  // 2. Handle Permissions
  if (user && user.role === "admin") {
    console.log(" [BUTTON] Delete Database");
  } else {
    // Both guests and regular users get this
    console.log(" [BUTTON] View Only");
  }

  // 3. Handle Analytics (Guests should NOT be tracked)
  if (user) {
    console.log(`Tracking visit for ID: ${user.id}`);
  }
}

// --- TEST DATA ---
const admin = { id: 101, name: "Alice", role: "admin" };
const regular = { id: 102, name: "Bob", role: "user" };
const guest = null;

// --- EXECUTION ---
console.log("--- Admin ---");
renderDashboard(admin);

console.log("\n--- Regular ---");
renderDashboard(regular);

console.log("\n--- Guest ---");
renderDashboard(guest);
