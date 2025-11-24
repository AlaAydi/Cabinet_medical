import {
  Routes
} from '@angular/router';
import {
  LoginComponent
} from './components/login/login.component';
import {
  DashbordAdminComponent
} from './components/dashbord-admin/dashbord-admin.component';
import {
  RegistreComponent
} from './components/registre/registre.component';
import {
  LayoutComponent
} from './shared/layout/layout.component';


export const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: "registre",
    component: RegistreComponent

  },

  {
    path: "",
    component: LayoutComponent,
    children: [
        {
        path: "",
        redirectTo: '/dashbord',
        pathMatch: 'full'
      },
      {
        path: "dashbord_admin",
        component: DashbordAdminComponent
      }


    ]



  },







];
