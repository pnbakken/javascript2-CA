import { prepareNewEntry } from "../../tools/admin/createEntry.js";
import { getUser, signOut } from "../../tools/auth/loginKeeper.js";

export function userPanel() {
    const panel = document.querySelector(".user-panel");
    panel.innerHTML = `<div>${getUser().username}</div>
                        <div><button class="logout-button">Log out</div>`;

    document.querySelector(".logout-button").onclick = doLogout;

    
    document.querySelector("footer").innerHTML += `<div><button id="create-new">Create new entry</button></div>`;
    document.querySelector("#create-new").onclick = prepareNewEntry;
    
}

function doLogout(event) {
    event.preventDefault();
    signOut();
}