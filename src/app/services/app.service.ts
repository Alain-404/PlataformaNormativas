import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  loading$ = new BehaviorSubject<boolean>(false);

  /*private setLoading(flag: boolean) {
    this.loading$.next(flag);
  }*/

  constructor() { }

  getValueLoading() {
    return this.loading$.asObservable();
  }

  activateLoading() {
    //this.setLoading(true);
    //setTimeout(() => {
      this.loading$.next(true);
    //}, 2000);
  }

  disableLoading() {
    //this.setLoading(false);
    this.loading$.next(false);
  }
}
