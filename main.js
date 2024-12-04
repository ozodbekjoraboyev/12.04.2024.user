let currentName = "User";

document.querySelector(".send-button").addEventListener("click", sendMessage);
document
  .querySelector(".change-name-button")
  .addEventListener("click", changeName);

function sendMessage() {
  const messageInput = document.querySelector(".message-input");
  const message = messageInput.value.trim();

  if (message) {
    const chatBox = document.querySelector(".chat-box");
    const newMessage = document.createElement("div");

    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, "0");
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    const timeString = `${hours}:${minutes}`;

    newMessage.classList.add("message");
    newMessage.innerHTML = `${currentName}: ${message} <span class="span" >(${timeString})</span>`;
    chatBox.appendChild(newMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    messageInput.value = "";
  }
}

function changeName() {
  const newName = prompt("Enter your name:", currentName);
  if (newName && newName.trim()) {
    currentName = newName.trim();
    document.querySelector(
      ".current-name"
    ).textContent = `Current User: ${currentName}`;
  }
}
