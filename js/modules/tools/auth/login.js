import displayMessage from "../../components/common/displayMessage.js";
import { authURL } from "../../settings/url.js";
import postData from "../network/postData.js";
import { getUser, saveToken, saveUser } from "./loginKeeper.js";


const form = document.querySelector("#login-form");

form.onsubmit = validateLogin;

if (getUser()) {
    displayMessage("normal-message", "You are already logged in", ".login-message");
    document.querySelector("#login-button").disabled = true;
}

function validateLogin(event) {
    event.preventDefault();
    const identifier = event.target.identifier.value.trim();
    const password = event.target.password.value.trim();

    if (identifier && password) {
        performLogin(identifier, password);
    } else {
        displayMessage("warning-message", "You must enter a username and password", ".login-message");
    }
}

async function performLogin(identifier, password) {
    const outData = {
        "identifier": identifier,
        "password": password,
    }

    try {
        const response = await postData(authURL, outData);
        if (response.error) {
            displayMessage("error-message", response.message[0].messages[0].message, ".login-message");
        } else if (response.user) {
            saveToken(response.jwt);
            saveUser(response.user);
            window.location.href="./index.html";
        }
    } catch (err) {
        console.error(err);
        displayMessage("error-message", err, ".login-message");
    }
}