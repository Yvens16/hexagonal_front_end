import Product from "../../domain/Product";

export default interface ProductManagementUsecase {
  getProducts(): Promise<Product[]>;
  getProductsById(id: number): Promise<Product>;
}