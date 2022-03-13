import { getUser, signOut } from "../../tools/auth/loginKeeper.js";

export function userPanel() {
    const panel = document.querySelector(".user-panel");
    panel.innerHTML = `<div>${getUser().username}</div>
                        <div><button class="logout-button">Log out</div>`;

    document.querySelector(".logout-button").onclick = doLogout;
    
}

function doLogout(event) {
    event.preventDefault();
    signOut();
}