import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productArray: Product[] = [
    {
      name: 'camera',
      price: 100,
      discount: 10,
      imageUrl: 'https://picsum.photos/200/100',
      description: 'test',
      count: 1,
    },
    {
      name: 'laptop',
      price: 200,
      discount: 30,
      imageUrl: 'https://picsum.photos/200/200',
      description: 'test',
      count: 1,
    },
    {
      name: 'playstation',
      price: 300,
      imageUrl: 'https://picsum.photos/200/300',
      description: 'test',
      count: 1,
    },
    {
      name: 'camera',
      price: 100,
      discount: 10,
      imageUrl: 'https://picsum.photos/200/400',
      description: 'test',
      count: 1,
    },
    {
      name: 'laptop',
      price: 200,
      discount: 30,
      imageUrl: 'https://picsum.photos/200/500',
      description: 'test',
      count: 1,
    },
    {
      name: 'playstation',
      price: 300,
      imageUrl: 'https://picsum.photos/200/600',
      description: 'test',
      count: 1,
    },
    {
      name: 'camera',
      price: 100,
      discount: 10,
      imageUrl: 'https://picsum.photos/200/700',
      description: 'test',
      count: 1,
    },
    {
      name: 'laptop',
      price: 200,
      discount: 30,
      imageUrl: 'https://picsum.photos/200/800',
      description: 'test',
      count: 1,
    },
    {
      name: 'playstation',
      price: 300,
      imageUrl: 'https://picsum.photos/300/300',
      description: 'test',
      count: 1,
    },
  ];
  @Output()
  itemAddedFromProductList: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {}
  onItemAdded(product: Product) {
    console.log(product);
    this.itemAddedFromProductList.emit(product);
  }
}
