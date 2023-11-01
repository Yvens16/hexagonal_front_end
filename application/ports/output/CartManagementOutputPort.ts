export default interface CartManagementOutPort  {
  createCart(): void;
  addProductToCart(): void;
  removeProductFromCart(): void;
}