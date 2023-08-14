export class OpenCart {
  static readonly type = '[Cart] isOpen';
  constructor(public payload: any) {}
}
export class increaseCartQuantity {
  static readonly type = '[Cart] increaseCartQuantity';
  constructor(public payload: any) {}
}

export class decreaseCartQuantity {
  static readonly type = '[Cart] decreaseCartQuantity';
  constructor(public payload: any) {}
}
export class removeFromCart {
  static readonly type = '[Cart] removeFromCart';
  constructor(public payload: any) {}
}
