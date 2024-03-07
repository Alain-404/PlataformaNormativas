import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  uri: string = environment.API_URL + "authentication-control/v1/login";
  //apiUrl: string = "http://localhost:8080/plantilla/authentication-control/v1/login";

  constructor(private http: HttpClient) { }

  login(usuario: any): Observable<any> {
    //return this.http.post<any>(this.apiUrl + "", usuario);
    return this.http.post<any>(this.uri, usuario);
  }



}
