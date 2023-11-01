import CartManagementOutputPort from "../../application/ports/output/CartManagementOutputPort";
import { httpFake } from "../fakeHttp/httpFake";

export default class CartManagementOutputPortMock implements CartManagementOutputPort {
  private httpClient;

  constructor() {
    this.httpClient = httpFake;
  }
  createCart() {
    throw new Error("Method not implemented.");
  }
  addProductToCart() {
    throw new Error("Method not implemented.");
  }
  removeProductFromCart() {
    throw new Error("Method not implemented.");
  }
}