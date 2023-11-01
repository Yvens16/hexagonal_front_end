import CartManagementOutputPort from "../../../application/ports/output/CartManagementOutputPort";
import { Http } from "./repository/Http";

// here I need to implement mirage
export default class CartManagementHttpAdapter implements CartManagementOutputPort {
  private httpClient: Http;

  constructor(httpClient: Http) {
    this.httpClient = httpClient;
  }
  createCart(): void {
    throw new Error("Method not implemented.");
  }
  addProductToCart(): void {
    throw new Error("Method not implemented.");
  }
  removeProductFromCart(): void {
    throw new Error("Method not implemented.");
  }
}