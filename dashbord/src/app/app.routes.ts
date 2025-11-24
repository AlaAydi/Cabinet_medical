import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashbordAdminComponent } from './components/dashbord-admin/dashbord-admin.component';
import { RegistreComponent } from './components/registre/registre.component';

export const routes: Routes = [

    {
        path : 'login' , 
        component : LoginComponent
    } , 
    {
        path :"registre" , 
        component : RegistreComponent

    }, 

     {
        path : "dashbord_admin" , 
        component: DashbordAdminComponent
     }

];
