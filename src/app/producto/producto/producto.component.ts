import { Component, OnInit } from '@angular/core';
import {Producto} from './../../producto-class';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto : Producto = {
    id:1,
    nombre : 'Servicio Dev:',
    categoria : 'WebApp Ecommerce',
    precio : 18.199
  }


  constructor() { }

  ngOnInit() {
    
  }

}
