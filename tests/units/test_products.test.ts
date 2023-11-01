import ProductManagementInputPort from "../../application/ports/input/ProductManagementInputPort";
import ProductManagementOutputMock from "../mocks/ProductManagementOutputMock";

test("Should return a list of products", async () => {
  const productService = new ProductManagementInputPort(new ProductManagementOutputMock());
  const products = await productService.getProducts();
  expect(products).toHaveLength(7);
});

test("Should return the 2nd product", async () => {
  const productService = new ProductManagementInputPort(new ProductManagementOutputMock());
  const product = await productService.getProductsById(2);
  expect(product.id.getId()).toBe(2);
});
