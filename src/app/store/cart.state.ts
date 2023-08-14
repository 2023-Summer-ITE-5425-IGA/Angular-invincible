import { Action, Selector, State, StateContext } from '@ngxs/store';

import { removeFromCart, decreaseCartQuantity, increaseCartQuantity, OpenCart } from './cart.action';

export class CartStateModel {
  isOpen: boolean;
  cartItems: any[];
}

@State<CartStateModel>({
  name: 'cart',
  defaults: {
    isOpen: false,
    cartItems: JSON.parse(localStorage.getItem('shopping-cart') || '[]')
  }
})

export class CartState {
  @Selector()
  static getIsOpen(state: CartStateModel) {
    return state.isOpen;
  }
  @Action(OpenCart)
  isOpen({ getState, patchState }: StateContext<CartStateModel>, { payload }: OpenCart) {
    const state = getState();
    patchState({
      isOpen: payload
    });
  }


  @Selector()
  static getCartItems(state: CartStateModel) {
    return state.cartItems;
  }
  @Action(increaseCartQuantity)
  increaseCartQuantity({ getState, patchState }: StateContext<CartStateModel>, { payload }: increaseCartQuantity) {
    const state = getState().cartItems;
    const { _id, price, title, imageURL } = payload
    if (state.find((item: any) => item._id === _id) == null) {
      patchState({
        cartItems: [...state, { _id, quantity: 1, price, title, imageURL }]
      });
      localStorage.setItem('shopping-cart', JSON.stringify([...state, { _id, quantity: 1, price, title, imageURL }]))
      return;
    } else {
      state.map((item: any) => {
        if (item._id === _id) {
          item.quantity = item.quantity + 1
        }
        return item
      });
      patchState({
        cartItems: state
      });
      localStorage.setItem('shopping-cart', JSON.stringify(state))
    }
  }


  @Action(decreaseCartQuantity)
  decreaseCartQuantity({ getState, patchState }: StateContext<CartStateModel>, { payload }: decreaseCartQuantity) {
    const state = getState().cartItems;
    const { _id, price, title, imageURL } = payload
    if (state.find((item: any) => item._id === _id)?.quantity === 1) {
      patchState({
        cartItems: state.filter((item: any) => item.id !== _id)
      });
      localStorage.setItem('shopping-cart', JSON.stringify(state.filter((item: any) => item._id !== _id)))
      return;
    } else {
      state.map((item: any) => {
        if (item._id === _id) {
          item.quantity = item.quantity - 1
        }
        return item
      });
      patchState({
        cartItems: state
      });
      localStorage.setItem('shopping-cart', JSON.stringify(state))
    }
  }


  @Action(removeFromCart)
  removeFromCart({ getState, patchState }: StateContext<CartStateModel>, { payload }: removeFromCart) {
    const state = getState().cartItems;
    const { _id, price, title, imageURL } = payload
      patchState({
        cartItems: state.filter((item: any) => item._id !== _id)
      });
      localStorage.setItem('shopping-cart', JSON.stringify(state.filter((item: any) => item._id !== _id)))
  }

  // @Action(AddCart)
  // add({ getState, patchState }: StateContext<CartStateModel>, { payload }: AddCart) {
  //   const state = getState();
  //   patchState({
  //     carts: [...state.carts, payload]
  //   });
  // }
}