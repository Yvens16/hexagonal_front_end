import Cart from "../Cart";

export default class CartDomainService {
  public static getTotalPrice(cart: Cart) {
    return cart.products.reduce((acc, product) => acc + product.price, 0);
  }
}