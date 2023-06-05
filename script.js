document.addEventListener("DOMContentLoaded", function () {
    var chatLog = document.getElementById("chatLog");
    var userInput = document.getElementById("userInput");
    var sendButton = document.getElementById("sendButton");

    sendButton.addEventListener("click", function () {
        var userMessage = userInput.value;
        displayMessage("user", userMessage);
        processUserMessage(userMessage);
        userInput.value = "";
    });

    function displayMessage(sender, message) {
        var messageElement = document.createElement("p");
        messageElement.textContent = sender + ": " + message;
        chatLog.appendChild(messageElement);
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    function processUserMessage(message) {
        var response = "I'm just a demo chatbot. How can I assist you?";
        displayMessage("chatbot", response);
    }
});  