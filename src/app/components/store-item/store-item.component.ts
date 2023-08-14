import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import axios from 'src/app/axios';
import { decreaseCartQuantity, increaseCartQuantity, removeFromCart } from 'src/app/store/cart.action';
import { Select, Store } from '@ngxs/store';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.scss']
})
export class StoreItemComponent {
  products: any = [];
  cartItems: any = []
  constructor(private appService: AppService, private store: Store) {
    // this.store.select(state => state.cart).subscribe((e) => {
    //   if (this.products.length) {
    //     this.products.map((p: any) => {
    //       return e.cartItems.find((item: any) => {
    //         if(item.id === p._id) {
    //           p.quantity = item.quantity
    //         }
    //       })
    //     })
    //     return;
    //   }
    //   this.fetchData(e.cartItems)
    // });
  }

  ngOnInit(): void {
    this.fetchData([])
  }
  async fetchData(items: any) {
    try {
      const response = await axios.get("/product/get");
      const data = response.data;
      console.log("Fetched data:", data);

      data.map((e: any) => {
        // items.find((item: any) => {
        //   if (item._id === e._id) {
        //     e.quantity = item.quantity
        //   }
        // })
        this.products.push(e)
      })
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
  // getItemById(id: number) {
  //   return this.cartItems.find((item: any) => item.id === id) || null;
  // }
  // addToCart(_id: number, price: number, title: string, image: string) {
  //   console.log('worked')
  //   this.appService.increaseCartQuantity(_id, 1, price, title, image);
  // };

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
