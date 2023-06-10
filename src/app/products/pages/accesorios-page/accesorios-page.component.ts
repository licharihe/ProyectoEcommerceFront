import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Accesorios } from 'src/app/models/accesorios/accesorios';
import { AccesoriosService } from 'src/app/service/accesorios/accesorios.service';
import { NodeService } from 'src/app/service/accesorios/node.service';

@Component({
  selector: 'app-accesorios-page',
  templateUrl: './accesorios-page.component.html',
  styleUrls: ['./accesorios-page.component.css']
})

export class AccesoriosPageComponent implements OnInit{
  files!: TreeNode[];
  accesorios!: Accesorios[];

  constructor(private accesoriosService: AccesoriosService,private nodeService: NodeService) {}

  ngOnInit() {
  
    this.nodeService.getFiles().then((data) => (this.files = data));

     this.accesoriosService.getAccesorios().then(accesorios => { 
     this.accesorios=accesorios;

      console.log(accesorios);
     });    
     
  }
 
}
