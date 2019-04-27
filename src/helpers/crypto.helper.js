import CryptoJS from "crypto-js";
import secret from "@/config";

export const encryptData = (data) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), secret.CRYPTO_SECRET_KEY);
};

export const decryptData = (cipherText) =>{
    let bytes  = CryptoJS.AES.decrypt(cipherText.toString(), secret.CRYPTO_SECRET_KEY);
    let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
};
