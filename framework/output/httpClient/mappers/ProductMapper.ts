import Product from "../../../../domain/Product";
import ProductId from "../../../../domain/value_objects/ProductId";

export default class ProductMapper {
  static toDomain(productDto: any): Product {
    return {
      id: new ProductId(productDto.id),
      title: productDto.title,
      price: productDto.price,
    };
  }
  static toDTO(product: any) {
    return {
      id: product.productId.getId(),
      title: product.title,
      price: product.price,
    };
  }
  static toDTOList(products: any) {
    return products.map((product: Product) => this.toDTO(product));
  };

  static toDomainList(productsDto: any) {
    return productsDto.map((productDto: any) => this.toDomain(productDto));
  }
};