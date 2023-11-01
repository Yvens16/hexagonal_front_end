// src/tests/cart.test.ts

import CartManagementInputPort from "../../application/ports/input/CartManagementInputPort";
import CartManagementUsecase from "../../application/usecases/CartManagementUsecase";
import Product from "../../domain/Product";
import ProductId from "../../domain/value_objects/ProductId";


const anyProduct = (id: number, price: number): Product => ({
  id: new ProductId(id),
  title: 'Any title',
  price
});


test('If I add more than five products, the sixth will not be added', async () => {
  const cartService: CartManagementUsecase = new CartManagementInputPort();
  let cart = cartService.createCart(1);

  cart = cartService.addProductToCart(cart, anyProduct(1, 0));
  cart = cartService.addProductToCart(cart, anyProduct(2, 0));
  cart = cartService.addProductToCart(cart, anyProduct(3, 0));
  cart = cartService.addProductToCart(cart, anyProduct(4, 0));
  cart = cartService.addProductToCart(cart, anyProduct(5, 0));
  // Be careful to use the right message, otherwise the test will fail
  expect(() => cartService.addProductToCart(cart, anyProduct(6, 0))).toThrow('Pas plus de 5 produits dans le panier');
  // This syntax is used when you want to test that a particular function throws an error when it's called with parameters.
  // If you didn't have parameters, you could use the following syntax: expect(cartService.addProductToCart).toThrow('Pas plus de 5 produits dans le panier');
  expect(cart.products.length).toEqual(5);
});

test('If I add a product and it already exist in the cart, the product will not be added', async () => {
  const cartService: CartManagementUsecase = new CartManagementInputPort();
  let cart = cartService.createCart();

  cart = cartService.addProductToCart(cart, anyProduct(1, 0));
  // Be careful to use the right message, otherwise the test will fail
  expect(() => cartService.addProductToCart(cart, anyProduct(1, 0))).toThrow("Le produit existe déjà dans le panier");
  expect(cart.products.length).toEqual(1);
});

test('If I add a product and it will exceed 100€, the product will not be added', async () => {
  const cartService: CartManagementUsecase = new CartManagementInputPort();
  let cart = cartService.createCart();
  cart = cartService.addProductToCart(cart, anyProduct(1, 50));
  expect(() => cartService.addProductToCart(cart, anyProduct(2, 60))).toThrow("Le panier ne peut pas dépasser 100€");
  expect(cart.products.length).toEqual(1);
});
