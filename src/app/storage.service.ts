import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storageSub= new Subject<String>();

  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }

  setItem(key: string, data: any) {
    localStorage.setItem(key, data);
    this.storageSub.next('changed');
  }

  removeItem(key:any) {
    localStorage.removeItem(key);
    this.storageSub.next('changed');
  }
}