import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Accesorios } from 'src/app/models/accesorios/accesorios';

@Injectable({
  providedIn: 'root'
})
export class AccesoriosService {

  constructor(private http:HttpClient) { }

  getAccesorios(){
    return this.http.get<any>('assets/archivosConfig/accesorios.json')
    .toPromise()
    .then(res=> <Accesorios[]> res.data)
    .then(data => {return data;});
  }
}
