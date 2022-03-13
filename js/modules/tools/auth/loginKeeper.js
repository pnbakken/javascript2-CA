import { saveToStorage,getFromStorage, removeStorageItem } from "../../settings/storage.js";

export function saveUser(user) {
    saveToStorage("user", user);
}

export function getUser() {
    return getFromStorage("user");
}

export function saveToken(token) {
    saveToStorage("token", token);
}

export function getToken() {
    return getFromStorage("token");
}

export function signOut() {
    removeStorageItem("user");
    removeStorageItem("token");
    window.location.reload();
}