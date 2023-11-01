import Cart from "../../domain/Cart";
import Product from "../../domain/Product";

export default interface CartManagementUsecase {
  createCart(cartId?:number): Cart;
  addProductToCart(cart: Cart, product: Product): Cart;
  removeProductFromCart(cart: Cart, product: Product): Cart;
}