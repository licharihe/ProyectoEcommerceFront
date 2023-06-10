import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AccesoriosPageComponent } from './pages/accesorios-page/accesorios-page.component';
import { AlmacenamientoPageComponent } from './pages/almacenamiento-page/almacenamiento-page.component';
import { ApplePageComponent } from './pages/apple-page/apple-page.component';
import { PrincipalPageComponent } from './pages/principal-page/principal-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { formatValores } from './pipes/formatValores.pipe';
@NgModule({
  declarations: [
    AccesoriosPageComponent,
    AlmacenamientoPageComponent,
    ApplePageComponent,
    PrincipalPageComponent,
    LoginComponent,
    formatValores
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
