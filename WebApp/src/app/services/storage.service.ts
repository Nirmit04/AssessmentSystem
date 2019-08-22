import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private secretPassword: string = '0123456789123456';
  constructor() { }

  public getStorage(key: string) {
    const encryptedKey = this.encryptUsingAES256(key);
    const encryptedValue = localStorage.getItem(encryptedKey);
    const decryptedValue = this.decryptUsingAES256((encryptedValue));
    return JSON.parse(decryptedValue);
  }

  public setStorage(key: string, value: any) {
    const encryptedKey = this.encryptUsingAES256(key);
    const encryptedValue = this.encryptUsingAES256(value);
    return localStorage.setItem(encryptedKey, JSON.stringify(encryptedValue));
  }

  public clearStorage() {
    return localStorage.clear();
  }

  public removeStorage(key: string) {
    const encryptedKey = this.encryptUsingAES256(key);
    return localStorage.removeItem(encryptedKey);
  }

  private encryptUsingAES256(plainText: string): string {
    let _key = CryptoJS.enc.Utf8.parse(this.secretPassword);
    let _iv = CryptoJS.enc.Utf8.parse(this.secretPassword);
    let encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(plainText), _key, {
        keySize: 16,
        iv: _iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      });
    return encrypted.toString();
  }

  private decryptUsingAES256(cipherText: string): string {
    let _key = CryptoJS.enc.Utf8.parse(this.secretPassword);
    let _iv = CryptoJS.enc.Utf8.parse(this.secretPassword);

    let decrypted = CryptoJS.AES.decrypt(
      JSON.parse(cipherText), _key, {
        keySize: 16,
        iv: _iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      }).toString(CryptoJS.enc.Utf8);
    return decrypted;
  }

}
