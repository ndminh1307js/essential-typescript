import { SportsProduct } from "./product";

class CartItem {
  constructor(public product: SportsProduct, public quantity: number) {}

  get totalPrice(): number {
    return this.product.price * this.quantity;
  }
}

export class Cart {
  private _items = new Map<number, CartItem>();

  constructor(public customerName: string) {}

  addProduct(product: SportsProduct, quantity: number): number {
    if (this._items.has(product.id)) {
      let item = this._items.get(product.id);
      item.quantity += quantity;
      return item.quantity;
    } else {
      this._items.set(product.id, new CartItem(product, quantity));
      return quantity;
    }
  }

  get totalPrice(): number {
    return [...this._items.values()].reduce(
      (total, item) => (total += item.totalPrice),
      0
    );
  }

  get itemCount(): number {
    return [...this._items.values()].reduce(
      (total, item) => (total += item.quantity),
      0
    );
  }
}
