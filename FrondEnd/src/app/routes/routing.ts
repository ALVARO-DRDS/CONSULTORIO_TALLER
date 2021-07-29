import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "../components/admin/admin.component";
import { HomeComponent } from "../components/home/home.component";
import { LoginComponent } from "../components/login/login.component";
import { ListComponent } from '../components/list/list.component';

 
const app_routes:Routes=[
    { path: 'home', component:HomeComponent },
    { path: 'admin', component:AdminComponent,
        children:[
            {path:'list',component:ListComponent}
        ]
    },
    { path: 'login', component:LoginComponent },
    { path: '**', pathMatch:'full', redirectTo:''}    
]

export const AppRouting=RouterModule.forRoot(app_routes);