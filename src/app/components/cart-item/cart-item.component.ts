import { Component, Input } from '@angular/core';
import { decreaseCartQuantity, increaseCartQuantity, removeFromCart } from 'src/app/store/cart.action';
import { Select, Store } from '@ngxs/store';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})

export class CartItemComponent {
  @Input() item: any;

  constructor(private store: Store) { 

  }


  addToCart(e: any) {
    // this.store.dispatch(new AddUser({ name: 'jdjkdssd', email: "jjjjjj" }))
    this.store.dispatch(new increaseCartQuantity(e))
      .subscribe(() => { console.log('worked add increaseCartQuantity') });
  }
  decreaseCartQuantity(e: any) {
    // this.store.dispatch(new AddUser({ name: 'jdjkdssd', email: "jjjjjj" }))
    this.store.dispatch(new decreaseCartQuantity(e))
      .subscribe(() => { console.log('worked add decreaseCartQuantity') });
  }
  removeFromCart(e: any) {
    // this.store.dispatch(new AddUser({ name: 'jdjkdssd', email: "jjjjjj" }))
    this.store.dispatch(new removeFromCart(e))
      .subscribe(() => { console.log('worked add removeFromCart') });
  }
}
