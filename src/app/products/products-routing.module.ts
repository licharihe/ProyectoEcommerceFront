import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalPageComponent } from './pages/principal-page/principal-page.component';
import { AccesoriosPageComponent } from './pages/accesorios-page/accesorios-page.component';
import { AlmacenamientoPageComponent } from './pages/almacenamiento-page/almacenamiento-page.component';
import { ApplePageComponent } from './pages/apple-page/apple-page.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path:'',
    component:PrincipalPageComponent
  },
  {
    path:'accesorios',
    component:AccesoriosPageComponent
  },
  {
    path:'almacenamiento',
    component:AlmacenamientoPageComponent
  },
  {
    path:'apple',
    component:ApplePageComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
