import { Component, Output } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  productIpass: Product[] = [];

  getItemsFromContainer(ItemsFromContainer: Product) {

    let index = this.productIpass.findIndex((item) => item.name == ItemsFromContainer.name)
    if (index>=0) {
      this.productIpass[index].count++;
    } else {
      this.productIpass.push(ItemsFromContainer);
    }
  }
}
