import { Component, OnInit } from '@angular/core';
// import { UserState } from './todo.state';

import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  isOpen: Observable<boolean>;

  constructor(private store: Store) {
    this.store.select(state => state.cart.isOpen).subscribe((e) => {
      console.log("eeeeeee", e)
      this.isOpen = e
    });
    this.store.select(state => state.cart.cartItems).subscribe((e) => {
      console.log("cartItems cartItems", e)
    });
  }

}
