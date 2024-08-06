function getBotResponse(userInput) {
    if (userInput.toLowerCase().includes("Picnic") || userInput.toLowerCase().includes("parks") || userInput.toLowerCase().includes("gardens")) {
        return "Some popular parks and gardens to spend time in Mangalore are Kadri Hill Park, Tannirbhavi Tree Park, Light House hill Garden or you could also visit Pilikula";
    } else if (userInput.toLowerCase().includes("restaurants") || userInput.toLowerCase().includes("food") || userInput.toLowerCase().includes("cuisine") || userInput.toLowerCase().includes("eat")) {
        return "You can try dining at Giri Manja's, Pabbas, or Ideal Ice Cream, Machalli, Tandoor for some local Mangalorean cuisine.";
    } else if (userInput.toLowerCase().includes("hotels") ||userInput.toLowerCase().includes("lodge") || userInput.toLowerCase().includes("stays")) {
        return "For accommodations, you can consider staying at The Gateway Hotel, Hotel Deepa Comforts, or Hotel Ocean Pearl.";
    } else if (userInput.toLowerCase().includes("hi")|| userInput.toLowerCase().includes("hello")|| userInput.toLowerCase().includes("hey")) {
        return "Hello, How Can I help you today?";
    } else if (userInput.toLowerCase().includes("transportation") || userInput.toLowerCase().includes("travel") || userInput.toLowerCase().includes("reach")) {
        return "Local transportation in Mangalore includes buses, auto-rickshaws, and taxis. There are also rental car services available.";
    } else if (userInput.toLowerCase().includes("beaches")) {
        return "You can visit Panambur beach, Tannirbhavi beach, Ullal beach or Someshwar beach";
    } else if (userInput.toLowerCase().includes("attractions") || userInput.toLowerCase().includes("tourist") || userInput.toLowerCase().includes("fun")) {
        return "People usually visit beaches, parks and enjoy the city life in here, but i would suggest you to explore more need help let me guide you";
    } else if (userInput.toLowerCase().includes("thank you")) {
        return "You're Welcome, Is there anything that you want me to help with?";
    } else if (userInput.toLowerCase().includes("no")) {
        return "Okay cool! See you around tell me anything if you need.";
    } else if (userInput.toLowerCase().includes("okay")) {
        return "yeah :) ";
    } else if (userInput.toLowerCase().includes("yes")) {
        return "So what more are you looking for in Mangalore";
    } else {
        return "I'm sorry, I don't have information on that topic. Please ask me about parks, beaches, hotels and more";
    }
}

function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    appendMessage(" You : ", userInput, true);
    
    // Your logic for sending the user input to the server and receiving the bot's response goes here
    // For now, we'll just show a placeholder response
    var botResponse = getBotResponse(userInput);
    appendMessage(" Kudla Guy : ", botResponse, false);

    document.getElementById("user-input").value = "";
}

function appendMessage(sender, message, isUser) {
    var chatBox = document.getElementById("chat-box");
    var messageElement = document.createElement("div");
    messageElement.classList.add(isUser ? "user-message" : "responder-message");
    var messageContent = document.createElement("div");
    messageContent.classList.add("message-bubble");
    var senderElement = document.createElement("span");
    senderElement.classList.add("sender");
    senderElement.textContent = sender;
    var messageTextElement = document.createElement("span");
    messageTextElement.classList.add("message-text");
    messageTextElement.textContent = message;
    messageContent.appendChild(senderElement);
    messageContent.appendChild(messageTextElement);
    messageElement.appendChild(messageContent);
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
