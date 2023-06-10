import { Component, OnInit } from '@angular/core';
import { CarouselService } from 'src/app/service/carousel/carousel.service';

import { Carousel } from 'src/app/models/carousel/carousel'
import { ProductoService } from 'src/app/service/productos/producto.service';
import { Productos } from 'src/app/models/carousel/productos';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.css']
})

export class PrincipalPageComponent implements OnInit{

  productos!: Productos[];


  responsiveOptions!: any[];
  carousel!: Carousel[];
  products!: any[];

  constructor(private carouselService: CarouselService ,private _Productos: ProductoService) {}

  ngOnInit() {
  
     this.carouselService.getCarousel().then(carousel => { 
     this.carousel=carousel;

      console.log(carousel);
     });    
     
     this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  this.obtenerProductos();
  }
 
  obtenerProductos() {  
    this._Productos.getListProductos().subscribe(data => {      
      this.productos=data;      
      console.log('productos',this.productos );
    }, error => {
      console.log(error);
    })
  }


}