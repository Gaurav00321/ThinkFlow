document.addEventListener("DOMContentLoaded", function () {
  const authTitle = document.getElementById("auth-title");
  const authForm = document.getElementById("auth-form");
  const toggleAuth = document.getElementById("toggle-auth");

  let isSignUp = true;

  toggleAuth.addEventListener("click", () => {
    isSignUp = !isSignUp;
    authTitle.textContent = isSignUp ? "Sign Up" : "Login";
    authForm.innerHTML = isSignUp
      ? `<input type="text" id="username" placeholder="Username" required />
               <input type="email" id="email" placeholder="Email" required />
               <input type="password" id="password" placeholder="Password" required />
               <input type="password" id="confirm-password" placeholder="Confirm Password" required />
               <button type="submit">Sign Up</button>`
      : `<input type="email" id="email" placeholder="Email" required />
               <input type="password" id="password" placeholder="Password" required />
               <button type="submit">Login</button>`;
    toggleAuth.textContent = isSignUp ? "Login" : "Sign Up";
  });

  authForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (isSignUp) {
      const username = document.getElementById("username").value;
      const confirmPassword = document.getElementById("confirm-password").value;

      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      console.log("Sign Up Successful:", { username, email, password });
    } else {
      console.log("Login Successful:", { email, password });
    }

    alert(isSignUp ? "Sign Up Successful!" : "Login Successful!");
  });
});
