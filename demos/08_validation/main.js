const form = document.getElementById("signupForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Empêche l'envoi réel
  let valid = true;

  // Nettoyage
  document.querySelectorAll(".error").forEach(e => e.textContent = "");

  const name = document.querySelector("#name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  // Validation manuelle
  if (name.value.trim().length < 3) {
    document.getElementById("nameError").textContent = "Le nom doit faire au moins 3 caractères.";
    valid = false;
  }

  if (!email.value.includes("@")) {
    document.getElementById("emailError").textContent = "Email invalide.";
    valid = false;
  }

  if (password.value.length < 6) {
    document.getElementById("passwordError").textContent = "Mot de passe trop court.";
    valid = false;
  }

  if (valid) {
    alert("Formulaire valide ! Données envoyées.");
    form.reset();
  }
});