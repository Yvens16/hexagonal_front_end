import Product from "../../../domain/Product";
import ProductManagementUsecase from "../../usecases/ProductManagementUsecase";
import ProductManagementOutputPort from "../output/ProductManagementOutputPort";

export default class ProductManagementInputPort implements ProductManagementUsecase {
  private outputPort: ProductManagementOutputPort;

  constructor(outputPort: ProductManagementOutputPort) {
    this.outputPort = outputPort;
  }

  async getProducts(): Promise<Product[]> {
    const products = await this.outputPort.getProducts();
    return products;
  }
  async getProductsById(id: number): Promise<Product> {
    const product = await this.outputPort.getProductsById(id);
    return product;
  }

}