import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { CarouselService } from './service/carousel/carousel.service';
import { HttpClientModule } from '@angular/common/http';
import { AccesoriosService } from './service/accesorios/accesorios.service';
import { NodeService } from './service/accesorios/node.service';

import { ToastrModule } from 'ngx-toastr';




@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ToastrModule.forRoot()
  ],
  providers: [
    CarouselService,
    AccesoriosService,
    NodeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
