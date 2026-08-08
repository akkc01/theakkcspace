const form = document.getElementById("ticketForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const ticket = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    issueType: document.getElementById("issueType").value,
    priority: document.getElementById("priority").value,
    description: document.getElementById("description").value
  };

  console.log("Ticket Created:", ticket);

  // Simulate API call
  setTimeout(() => {
    form.reset();
    successMessage.classList.remove("hidden");
  }, 500);
});