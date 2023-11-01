import Product from "./Product";
import CartId from "./value_objects/CartId";

export default class Cart {
  readonly id: CartId;
  products: Product[];
  constructor(products: Product[], cartId?: number ) {
    this.id = new CartId(cartId);
    this.products = products;
  }
}