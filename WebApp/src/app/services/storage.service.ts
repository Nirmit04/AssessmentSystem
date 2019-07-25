import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getStorage(key: string) {
    return (JSON.parse(localStorage.getItem(key)));
  }

  setStorage(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  clearStorage() {
    return localStorage.clear();
  }

  removeStorage(key: string) {
    return localStorage.removeItem(key);
  }
}
