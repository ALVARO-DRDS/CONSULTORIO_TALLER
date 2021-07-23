import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FotografiasService {
  //CREAR UNA VARIABLE PARA IMPORTAR EL SERVICIO GLOBAL
  private url:string;


  constructor(private _http:HttpClient) {
    this.url=GLOBAL.url;
  }

  getFotografias():any{
    return  this._http.get(this.url+'fotografias')
    .toPromise().then(res=>res);
  }

}
