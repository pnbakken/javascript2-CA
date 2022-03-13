import { storage } from "../../settings/storage.js";

export function saveToStorage(key, data) {
    storage.setItem(key, JSON.stringify(data));
}

export function getFromStorage(key) {
    const foundData = JSON.parse(storage.getItem(key));
    if (!foundData) {
        return [];
    } else return foundData;
}


// I ended up writing and importing all storage functions from the storage.js file in the settings folder. I don't think anything actually uses this script, but I daren't delete it this late in the week.