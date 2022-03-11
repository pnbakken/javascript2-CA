export const storage = window.localStorage;

export function saveToStorage(key, data) {
    console.log("Saving " + JSON.stringify(data) + " to storage");
    storage.setItem(key, JSON.stringify(data));
}

export function getFromStorage(key) {
    const returnData = JSON.parse(storage.getItem(key));
    console.log("Getting " + returnData + " from storage");
    if (!returnData) {
        return null;
    } else return returnData;
}

export function removeStorageItem(key) {
    storage.removeItem(key);
}

export function clearStorage() {
    storage.clear();
}