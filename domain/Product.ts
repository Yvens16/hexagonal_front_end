import ProductId from "./value_objects/ProductId";

export default class Product {
  readonly id: ProductId;
  title: string;
  price: number;

  constructor(productId: ProductId, title: string, price: number) {
    this.id = productId;
    this.title = title;
    this.price = price;
  }
}