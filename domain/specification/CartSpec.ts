import Cart from "../Cart";
import Product from "../Product";
import CartDomainService from "../service/CartService";

export default class CartSpec {
  private static MAX_PRODUCTS = 5;
  private static MAX_PRICE = 100;
  
  public static checkMaxProducts(cart: Cart): void  {
    if (cart.products.length >= CartSpec.MAX_PRODUCTS) {
      throw new Error("Pas plus de 5 produits dans le panier");
    }
  }

  public static checkDuplicateProduct(cart: Cart, product: Product): void {
    if (cart.products.find((p: Product) => p.id.getId() === product.id.getId())) {
      throw new Error("Le produit existe déjà dans le panier");
    }
  }

  public static checkMaxCartPrice(cart: Cart, product: Product): void {
    if (CartDomainService.getTotalPrice(cart) + product.price > CartSpec.MAX_PRICE) {
      throw new Error("Le panier ne peut pas dépasser 100€");
    }
  }

}