function signup() {
  const username = document.getElementById('signup-username').value;
  const password = document.getElementById('signup-password').value;
  if (!username || !password) return alert("Fill all fields!");

  let users = JSON.parse(localStorage.getItem('users') || '{}');
  if (users[username]) return alert("Username already exists");

  users[username] = { password, friends: [], messages: {} };
  localStorage.setItem('users', JSON.stringify(users));
  alert("Signup successful! Please login.");
  window.location.href = "index.html";
}

function login() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  let users = JSON.parse(localStorage.getItem('users') || '{}');

  if (!users[username] || users[username].password !== password) {
    return alert("Invalid credentials");
  }

  localStorage.setItem('loggedInUser', username);
  window.location.href = "chat.html";
}

function logout() {
  localStorage.removeItem('loggedInUser');
  window.location.href = "index.html";
}
