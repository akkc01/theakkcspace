function goTo(service) {
  const routes = {
    support: "http://support.theakkc.space",
    email: "http://email.theakkc.space"
  };
  window.location.href = routes[service];
}

function scrollToServices() {
  document.getElementById("services").scrollIntoView({
    behavior: "smooth"
  });
}

