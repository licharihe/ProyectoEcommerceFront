import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private myAppUrl = 'http://127.0.0.1:4200/';
  private myApiUrlResgistro = 'auth/registration/'; 
  private myApiUrlToken ='dj-rest-auth/login/';

  constructor(private http: HttpClient) { }
 
 
  saveCredenciales(login: any): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrlResgistro, login);
  }
  
  saveToken(login: any): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrlToken, login);
  }

}
