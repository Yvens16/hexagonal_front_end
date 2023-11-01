import Cart from "../../../domain/Cart";
import Product from "../../../domain/Product";
import CartManagementUsecase from "../../usecases/CartManagementUsecase";
import CartSpec from "../../../domain/specification/CartSpec";

export default class CartManagementInputPort implements CartManagementUsecase {
  createCart(id?:number): Cart {
    return new Cart([], id);
  }
  addProductToCart(cart: Cart, product: Product): Cart {
    CartSpec.checkMaxProducts(cart);
    CartSpec.checkDuplicateProduct(cart, product);
    CartSpec.checkMaxCartPrice(cart, product);
    const newCart: Cart = new Cart( [...cart.products, product], cart.id.getId(),);
    return newCart;
  };
  removeProductFromCart(cart: Cart, product: Product): Cart {
    const newCart: Cart = new Cart(cart.products.filter((p: Product) => p.id.getId() !== product.id.getId()), cart.id.getId());
    return newCart;
  };
}