const chatMessages = document.getElementById("chat-messages");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", () => {
  const userMessage = userInput.value.trim();
  if (userMessage) {
    addMessage("user", userMessage);
    userInput.value = "";
    setTimeout(() => {
      addMessage("bot", generateBotResponse(userMessage));
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
  // Simple bot response logic (you can expand this)
  return `You said: "${userMessage}". How can I help you further?`;
}

document.getElementById('new-chat-button').addEventListener('click', function() {
  // You can add logic here to create a new chat
  console.log("New chat created!");
  // For example, clear the chat container or reset the state
  document.getElementById('chat-messages').innerHTML = ''; // Clear the messages
});


