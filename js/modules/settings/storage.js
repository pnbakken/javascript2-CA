export const storage = window.localStorage;

export function saveToStorage(key, data) {
    storage.setItem(key, JSON.stringify(data));
}

export function getFromStorage(key) {
    const returnData = JSON.parse(storage.getItem(key));
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