const username = localStorage.getItem('loggedInUser');
if (!username) window.location.href = "index.html";

let users = JSON.parse(localStorage.getItem('users') || '{}');
let currentFriend = null;

function loadFriends() {
  const list = document.getElementById("friends-list");
  list.innerHTML = "";
  users[username].friends.forEach(friend => {
    const li = document.createElement("li");
    li.textContent = friend;
    li.onclick = () => openChat(friend);
    list.appendChild(li);
  });
}

function addFriend() {
  const newFriend = document.getElementById("new-friend").value;
  if (!users[newFriend]) return alert("User does not exist");
  if (newFriend === username) return alert("You cannot add yourself");

  if (!users[username].friends.includes(newFriend)) {
    users[username].friends.push(newFriend);
  }
  if (!users[newFriend].friends.includes(username)) {
    users[newFriend].friends.push(username);
  }

  saveUsers();
  loadFriends();
}

function openChat(friend) {
  currentFriend = friend;
  document.getElementById("chat-title").textContent = `Chat with ${friend}`;
  renderMessages();
}

function renderMessages() {
  const box = document.getElementById("chat-box");
  box.innerHTML = "";

  const msgs = users[username].messages[currentFriend] || [];
  msgs.forEach(msg => {
    const div = document.createElement("div");
    div.textContent = `${msg.sender}: ${msg.text}`;
    box.appendChild(div);
  });
}

function sendMessage() {
  if (!currentFriend) return alert("Select a friend to chat");

  const msgText = document.getElementById("message-input").value;
  if (!msgText) return;

  if (!users[username].messages[currentFriend]) {
    users[username].messages[currentFriend] = [];
  }
  if (!users[currentFriend].messages[username]) {
    users[currentFriend].messages[username] = [];
  }

  const msg = { sender: username, text: msgText };
  users[username].messages[currentFriend].push(msg);
  users[currentFriend].messages[username].push(msg);

  document.getElementById("message-input").value = "";
  saveUsers();
  renderMessages();
}

function saveUsers() {
  localStorage.setItem('users', JSON.stringify(users));
}

loadFriends();
