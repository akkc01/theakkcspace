const form = document.getElementById("emailForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const emailData = {
    to: document.getElementById("to").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  };

  console.log("Email Data:", emailData);

  // Simulate API call
  setTimeout(() => {
    form.reset();
    successMessage.classList.remove("hidden");
  }, 500);
});