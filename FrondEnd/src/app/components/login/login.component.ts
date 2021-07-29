import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usuario: any = {};

  constructor(
    private loginService:LoginService,
    private router: Router
  ) { }

  
  ngOnInit(): void {
  }

  login() {
    
    this.loginService.loginuser(this.usuario)
        .then((response: any) => {
            localStorage.setItem('identy_user',JSON.stringify(response.usuario))
            //  console.log(response);
             this.router.navigate(['/admin/list']);
         }).catch((error: any) => {
             console.log(error);
         });
 }

}
