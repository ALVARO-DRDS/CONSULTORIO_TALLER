import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url:string;

  constructor(
    private _http:HttpClient
  ) {
    this.url=GLOBAL.url;
  }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type':'Application/json'
  });

  loginuser(usuario:any, getToken?:boolean): any {
    return this._http.post(`${this.url}/../login`, usuario, {headers:this.headers}).toPromise()
        .then(res => res);
}


}
