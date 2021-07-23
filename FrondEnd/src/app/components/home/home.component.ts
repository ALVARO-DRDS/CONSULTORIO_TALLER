import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FotografiasService } from 'src/app/services/fotografias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public fotografias: any[] = [];

  constructor(private _serviceFotografias:FotografiasService) { }

  ngOnInit() {
    this.getFotografias();
  }

  getFotografias(){
    this._serviceFotografias.getFotografias()
    .then((response: { fotografias: any[]; })=>{
      this.fotografias=response.fotografias; //Luego del punto definimos exactamente el servicio que creamos en el back-end lo cual podemos observar en routes
      console.log(this.fotografias);
    })
    .catch((err: any)=>{
      console.log(err);
    });
    }

}
