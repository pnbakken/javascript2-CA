import displayMessage from "../../components/common/displayMessage.js";
import { dataURL } from "../../settings/url.js"
import { getToken } from "../auth/loginKeeper.js"
import postData from "../network/postData.js";

/**
This script isn't hooked up to any frontend components. 
I have an idea for how to do it but just didn't have time this week. 
For now I'm just doing this as an experiment.


I made a button for it and it works, which is cool.
I assume I would be able to edit or delete entries using the entry id, but again, no time.
**/

export function prepareNewEntry(event) {
    event.preventDefault();
    const userToken = getToken();

    const entryData = {
        author: "Admin",
        summary: "A short summary written for test purposes",
        title: "Admin creates new article, local residents in uproar",
    }

    if (!userToken) {
        displayMessage("warning-message", "You must be logged in to create an entry", "main");
        return;
    } else {
        postEntry(dataURL, entryData, userToken)
    }
    
    


}

async function postEntry(url, data, token) {

    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json",
            Authorization : `Bearer ${token}`, 
        }
    }

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        window.location.reload();
    } catch(err) {
        console.error(err);
    }
}