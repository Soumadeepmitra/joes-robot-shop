import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../catalog/product.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: IProduct[] = [];

  constructor() { }

  add(product: IProduct) {
    this.cart.push(product);
    console.log(`product ${product.name} added to cart`);
  }

  getCart() {
  // : Observable<IProduct[]> {
    // return this.cart.asObservable();
  }
}

// export class CartService {
//   private cart: ILineItem[] = [];

//   constructor() { }

//   getTotalPrice(){
//     return (
//       Math.round(
//         this.cart.reduce<number>((prev,cur) => {
//           return (prev + cur.qty * (cur.product.price * (1 - cur.product.discount))
//         );
//         }, 0) * 100
//       ) / 100
//     );
//   }

//   findLineItem(product: IProduct) {
//     return this.cart.find((li) => li.product.id === product.id);
//   }
//   add(product: IProduct) {
//     let lineItem = this.findLineItem(product);
//     if (lineItem) {
//       lineItem.qty++;
//     } else {
//       lineItem = {product: product, qty:1};
//       this.cart.push(lineItem);
//     }
//    console.log(`product ${product.name} added to cart`);
//    console.log('Total Price: $' + this.getTotalPrice());

//   }
// }
