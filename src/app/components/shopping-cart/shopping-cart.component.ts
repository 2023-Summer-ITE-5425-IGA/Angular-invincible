import { Component } from '@angular/core';
import { NgbActiveOffcanvas, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  cartItems: any;
  total: any;
  constructor(public activeOffcanvas: NgbActiveOffcanvas, private store: Store) {
    this.store.select(state => state.cart).subscribe((e) => {
      console.log("cartItems cartItems shoppinnnnnnnnnnnnggggg", e)
      this.cartItems = e.cartItems;
      this.total = e.cartItems.reduce((total: any, cartItem: any) => {
        // const item =storeItems.find(i => i.id === cartItem.id) 
        return total + (cartItem?.price * cartItem.quantity)
      }, 0)
    });
  }

}
