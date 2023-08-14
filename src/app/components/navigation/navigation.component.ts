import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { StorageService } from 'src/app/storage.service';
import { OpenCart } from '../../store/cart.action';
import { Select, Store } from '@ngxs/store';
import { NgbActiveOffcanvas, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  cartQuantity: any;
  constructor(public appService: AppService, private storageService: StorageService, private store: Store, private offcanvasService: NgbOffcanvas) {
    // this.cartQuantity = this.appService.cartQuantity;
    this.store.select(state => state.cart).subscribe((e) => {
      console.log("cartItems cartItems dddddddd", e)
      this.cartQuantity = e.cartItems.reduce((quantity: any, item: any) => item.quantity + quantity, 0);
    });
  }

  ngOnInit(): void {
    console.log(this.appService.cartQuantity)
    // this.cartQuantity = this.appService.cartQuantity;

  }

  openCart(e: any) {
    // this.store.dispatch(new AddUser({ name: 'jdjkdssd', email: "jjjjjj" }))
    // this.store.dispatch(new OpenCart(e))
    //   .subscribe(() => { console.log('worked') });

    const offcanvasRef = this.offcanvasService.open(ShoppingCartComponent, { position: 'end' });
    offcanvasRef.componentInstance.name = 'World';
  }

}




