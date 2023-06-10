import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {


  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        items: [
          {
            label: 'Iniciar Sesión',
            icon: 'pi pi-user',
            routerLink: 'login'
         
          },
          {
            label: 'Registrarse',
            icon: 'pi pi-file-export',
            routerLink: '/'
          }]
      },
      {
        label: 'Categorías',
        icon: 'pi pi-align-justify',
        items: [
          {
            label: 'Accesorios',
            icon: 'pi pi-th-large',
            routerLink: 'accesorios'
          },
          {
            label: 'Almacenamiento',
            icon: 'pi pi-database',
            routerLink: 'almacenamiento'
          },
          {
            label: 'Apple',
            icon: 'pi pi-apple',
            routerLink: 'apple'
          }
        ]
      },
      {
        label: 'Lista de Precios',
        icon: 'pi pi-cog',
        routerLink: '/'
      },
      {
        label: 'Envíos y Garantias',
        icon: 'pi pi-cog',
        routerLink: '/'
      }
    ];

  }





}
