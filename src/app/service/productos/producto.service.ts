import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private myAppUrl = 'http://127.0.0.1:4200/';
  private myApiUrlProductos = 'getproducts'; 


  constructor(private http: HttpClient) { }

  getListProductos(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrlProductos);
  }
}
