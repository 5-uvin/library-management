function loginUser(event) {
  event.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "admin" && password === "1234") {
    alert("Login successful!");
    window.location.href = "home.html";
  } else {
    alert("Invalid credentials. Try admin / 1234");
  }
}
