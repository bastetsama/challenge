import { Component, OnInit } from '@angular/core';
import { LISTPROD } from './../../product-list';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  listprod = LISTPROD

  constructor() { }

  ngOnInit() {
  }

}
