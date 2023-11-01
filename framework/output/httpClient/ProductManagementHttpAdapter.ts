import ProductManagementOutputPort from "../../../application/ports/output/ProductManagementOutputPort";
import Product from "../../../domain/Product";
import { Http } from "./repository/Http";
import ProductMapper from "./mappers/ProductMapper";

export default class ProductManagementHttpAdapter implements ProductManagementOutputPort {
  client: Http;

  constructor(client: Http) {
    this.client = client;
  }

  async getProducts(): Promise<Product[]> {
    const products = await this.client.get<Product[]>("/api/products");
    return ProductMapper.toDomainList(products);;
  }

  async getProductsById(id: number): Promise<Product> {
    const product = await this.client.get<Product>(`/api/products/${id}`);
    return ProductMapper.toDomain(product);
  }

}