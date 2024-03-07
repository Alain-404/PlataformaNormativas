import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppUtility {

  loading$ = new BehaviorSubject<boolean>(false);

  /*private setLoading(flag: boolean) {
    this.loading$.next(flag);
  }*/

  constructor() {}

  getValueLoading() {
    return this.loading$.asObservable();
  }

  activateProgressBar() {
    //this.setLoading(true);
    this.loading$.next(true);
  }

  disableProgressBar() {
    //this.setLoading(false);
    this.loading$.next(false);
  }
}
