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
