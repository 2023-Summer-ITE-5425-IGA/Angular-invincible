import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  isOpen: boolean = false;
  cartItems: any = JSON.parse(localStorage.getItem('shopping-cart') || '[]')

  cartQuantity: any = this.cartItems.reduce((quantity: any, item: any) => item.quantity + quantity, 0)


  openCart() {
    this.isOpen = true;
  }

  closeCart() {
    this.isOpen = false;
  }
  getItemQuantity(id: number) {
    return this.cartItems.find((item: any) => item.id === id)?.quantity || 0;
  }

  getItemById(id: number) {
    return this.cartItems.find((item: any) => item.id === id) || null;
  }
  increaseCartQuantity(id: number, quantity: number, price: number, title: string, image: string) {
    console.log('worked server')

    if (this.cartItems.find((item: any) => item.id === id) == null) {
      localStorage.setItem('shopping-cart', JSON.stringify([...this.cartItems, { id, quantity: 1, price, title, image }]))
      this.cartItems = JSON.parse(localStorage.getItem('shopping-cart') || '[]')
      return;
    } else {
      var newArray = {}
      console.log("this.cartItems", this.cartItems)
      this.cartItems.map((item: any) => {
        if (item.id === id) {
          item.quantity = item.quantity + 1
        }
        return item
      });
      localStorage.setItem('shopping-cart', JSON.stringify(this.cartItems))
      this.cartItems = JSON.parse(localStorage.getItem('shopping-cart') || '[]')

    }

  }

  decreaseCartQuantity(id: number) {
    if (this.cartItems.find((item: any) => item.id === id)?.quantity === 1) {
      return this.cartItems.filter((item: any) => item.id !== id);
    } else {
      return this.cartItems.map((item: any) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    }
  }

  removeFromCart(id: number) {
    return this.cartItems.filter((item: any) => item.id !== id);
  }



}