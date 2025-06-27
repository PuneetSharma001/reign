document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("login-btn");
  const signupBtn = document.getElementById("signup-btn");

  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
          alert("Login successful!");
          window.location.href = "index.html";
        })
        .catch(e => alert("Error: " + e.message));
    });
  }

  if (signupBtn) {
    signupBtn.addEventListener("click", () => {
      const email = document.getElementById("signup-email").value;
      const password = document.getElementById("signup-password").value;
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          alert("Signup successful!");
          window.location.href = "index.html";
        })
        .catch(e => alert("Error: " + e.message));
    });
  }
});
