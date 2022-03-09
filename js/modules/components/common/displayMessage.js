export default function displayMessage(messageType, messageText, messageTarget) {
    document.querySelector(messageTarget).innerHTML = `<div class="message ${messageType}">${messageText}</div>`; 
}