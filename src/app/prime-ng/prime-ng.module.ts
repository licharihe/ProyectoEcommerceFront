import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { MenuModule } from 'primeng/menu';

import { AnimateModule } from 'primeng/animate';
import { ButtonModule } from 'primeng/button';

import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ContextMenuModule } from 'primeng/contextmenu';

import { DividerModule } from 'primeng/divider';
import { DialogModule } from 'primeng/dialog';

import { FieldsetModule } from 'primeng/fieldset';

import { InputTextModule } from 'primeng/inputtext';
import { ImageModule } from 'primeng/image';

import { MenubarModule } from 'primeng/menubar';

import { TabViewModule } from 'primeng/tabview';
import { TreeModule } from 'primeng/tree';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

import { PasswordModule } from 'primeng/password';
import { PanelModule } from 'primeng/panel';

import { RatingModule } from 'primeng/rating';
import { SplitterModule } from 'primeng/splitter';



@NgModule({
  declarations: [],
  exports: [
    //MenuModule,
    ButtonModule,
    DialogModule,
    CardModule,
    ContextMenuModule,
    DividerModule,
    CarouselModule,
    FieldsetModule,
    MenubarModule,
    PanelModule,
    TabViewModule,
    TreeModule,
    TableModule,
    ToastModule,
    RatingModule,
    SplitterModule,
    ImageModule,
    AnimateModule,
    PasswordModule,
    InputTextModule
  ]
})
export class PrimeNgModule { }
