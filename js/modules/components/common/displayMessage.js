export default function displayMessage(messageType, messageText, messageTarget) {
    console.log("displaying message");
    document.querySelector(messageTarget).innerHTML = `<div class="message ${messageType}">${messageText}</div>`; 
}