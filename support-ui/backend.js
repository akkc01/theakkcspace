fetch("http://api.company.com/api/support", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(ticket)
});