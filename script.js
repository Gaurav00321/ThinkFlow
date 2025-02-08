const chatMessages = document.getElementById("chat-messages");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const recentChatsList = document.getElementById("recent-chats-list");

let chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
updateRecentChatsUI();

sendButton.addEventListener("click", () => {
  const userMessage = userInput.value.trim();
  if (userMessage) {
    addMessage("user", userMessage);
    userInput.value = "";
    setTimeout(() => {
      const botResponse = generateBotResponse(userMessage);
      addMessage("bot", botResponse);
      saveChatToHistory(userMessage, botResponse);
    }, 1000);
  }
});

function addMessage(sender, text) {
  const message = document.createElement("div");
  message.classList.add("message", sender);
  const messageContent = document.createElement("div");
  messageContent.classList.add("message-content");
  messageContent.textContent = text;
  message.appendChild(messageContent);
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function generateBotResponse(userMessage) {
  return `You said: "${userMessage}". How can I help you further?`;
}

function saveChatToHistory(userMsg, botMsg) {
  chatHistory.push({ user: userMsg, bot: botMsg });
  if (chatHistory.length > 122) chatHistory.shift();
  localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
  updateRecentChatsUI();
}

function updateRecentChatsUI() {
  recentChatsList.innerHTML = "";
  chatHistory.forEach((chat, index) => {
    const chatItem = document.createElement("div");
    chatItem.classList.add("recent-chat-item");
    chatItem.textContent = chat.user.substring(0, 20) + "...";
    chatItem.addEventListener("click", () => restoreChat(index));
    recentChatsList.appendChild(chatItem);
  });
}

function restoreChat(index) {
  chatMessages.innerHTML = "";
  const chat = chatHistory[index];
  addMessage("user", chat.user);
  addMessage("bot", chat.bot);
}

document.getElementById("new-chat-button").addEventListener("click", () => {
  chatMessages.innerHTML = "";
});

document
  .getElementById("toggle-drawer-button")
  .addEventListener("click", () => {
    document.getElementById("recent-chats").classList.toggle("open");
  });
