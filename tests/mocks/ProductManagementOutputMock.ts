import ProductManagementOutputPort from "../../application/ports/output/ProductManagementOutputPort";
import Product from "../../domain/Product";
import ProductMapper from "../../framework/output/httpClient/mappers/ProductMapper";
import { httpFake } from "../fakeHttp/httpFake";

export default class ProductManagementOutputMock implements ProductManagementOutputPort {
  private httpClient;

  constructor() {
    this.httpClient = httpFake;
  }

  async getProductsById(id: number): Promise<Product> {
    if (!id) throw new Error("No id to make the search");
    const product = await this.httpClient.get('', { id });
    return ProductMapper.toDomain(product);
  }
  async getProducts(): Promise<any> {
    const products = await this.httpClient.get('');
    return ProductMapper.toDomainList(products);
  }
}