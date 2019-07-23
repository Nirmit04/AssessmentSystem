import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getStorage(key: string) {
    return (JSON.parse(localStorage.getStorage(key)));
  }

  setStorage(key: string, value: any) {
    return localStorage.setStorage(key, JSON.stringify(value));
  }

  clearStorage() {
    return localStorage.clearStorage();
  }

  removeStorage(key: string) {
    return localStorage.removeStorage(key);
  }
}
