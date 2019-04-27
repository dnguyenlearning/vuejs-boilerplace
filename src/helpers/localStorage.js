import {encryptData, decryptData} from "./crypto.helper";

export const setItem = (itemName, value) => {
    value = encryptData(value);
    localStorage.setItem(itemName, value)
};

export const getItem = (itemName) => {
    let string = localStorage.getItem(itemName);
    if (!string) return undefined;
    return decryptData(string);
};

export const clearItem = (itemName) => {
    localStorage.removeItem(itemName)
};
