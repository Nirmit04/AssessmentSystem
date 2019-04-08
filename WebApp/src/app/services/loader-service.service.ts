import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable()
export class LoaderServiceService {
  isLoading = new Subject<boolean>();
  show() {
    console.log('show');
    this.isLoading.next(true);
  }
  hide() {
    this.isLoading.next(false);
  }
}