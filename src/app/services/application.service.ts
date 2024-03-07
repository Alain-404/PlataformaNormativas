import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor() { }

  /*public token(): string {
    if (sessionStorage.getItem('token') != null) {
      this._token = sessionStorage.getItem('token');
    } else {
      this._token = null;
    }
    return this._token;
  }*/

  //sessionStorage.setItem('token', this._token);
}
