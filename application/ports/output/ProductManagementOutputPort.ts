import Product from '../../../domain/Product';

export default interface ProductManagementOutputPort {
  getProducts(): Promise<Product[]>;
  getProductsById(id: number): Promise<Product>;
}