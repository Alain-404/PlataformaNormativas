import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri: string = environment.API_URL + "user-manager/v1/";

  constructor(private http: HttpClient) { }

  list(pageNumber: number, pageSize: number, orderBy: string): Observable<any> {
    return this.http.get<any>(this.uri + "user?pageNumber=1&pageSize=10&orderBy=name");
  }

  saveNewUser(usuario: any): Observable<any> {
    return this.http.post<any>(this.uri+ "user", usuario);
  }

  updateNewUser(usuario: any): Observable<any> {
    return this.http.put<any>(this.uri+ "user/"+usuario.id, usuario);
  }
  
  getInfoUser(idUser:number): Observable<any> {
    return this.http.get<any>(this.uri+ "user/"+idUser);
  }

  /*
  login(usuario: any): Observable<any> {
    //return this.http.post<any>(this.apiUrl + "", usuario);
    return this.http.post<any>(this.uri, usuario);
  }
  */
}
