// JavaScript to handle login and register functionality
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const goToLogin = document.getElementById("go-to-login");
const goToRegister = document.getElementById("go-to-register");

// Switch between Login and Register forms
goToRegister.addEventListener("click", () => {
  loginForm.classList.add("hidden");
  registerForm.classList.remove("hidden");
});

goToLogin.addEventListener("click", () => {
  registerForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
});

// Handle Register Form Submission
registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  if (localStorage.getItem(email)) {
    alert("User already exists!");
  } else {
    localStorage.setItem(email, password);
    alert("Registration successful! You can now log in.");
    registerForm.reset();
    goToLogin.click();
  }
});

// Handle Login Form Submission
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const storedPassword = localStorage.getItem(email);

  if (storedPassword && storedPassword === password) {
    alert("Login successful!");
    loginForm.reset();
    // Redirect or perform post-login actions here
  } else {
    alert("Invalid email or password!");
  }
});
