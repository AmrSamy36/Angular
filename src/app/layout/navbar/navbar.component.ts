import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

@Input()
itemsRecieved!:Product[];

  constructor() { }

  ngOnInit(): void {
  }

delete(item:Product){
let index=this.itemsRecieved.findIndex((item)=>this.itemsRecieved);
this.itemsRecieved.splice(index,1);
item.count=0;
}

}
