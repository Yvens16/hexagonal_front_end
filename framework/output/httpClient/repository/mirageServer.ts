import { Http } from "./Http";
import { Factory, Model, createServer, Request, Serializer } from "miragejs";
import { mirageProductListMock } from "../../../../tests/fixtures/products";

createServer({
  models: {
    products: Model,
  },
  factories: {
    product: Factory.extend({
      title(i: number) {
        return `Product ${i + 1}`;
      },
      description() {
        return "Product description";
      },
      price(i: number) {
        return 10 * i;
      },
    }),
  },
  serializers: {
    product: Serializer.extend({
      
    }),
  },
  seeds(server) {
    server.createList("product", 10);
  },
  routes() {
    this.get("/api/products", (schema: any) => {
      return schema.db.products;
    })
    this.get("/api/products/:id", (schema: any, request: Request) => {
      const id = request.params["id"];
      return schema.db.products.find(id);
    });
  },
})

export const mirageHttpClient: Http = {
  get: async <T>(path: string, params?: Record<string, any>, config?: any) => {
    const response = await fetch(path);
    const products = await response.json();
    return products as T;
  },
  post: async <T>(path: string, params?: Record<string, any>, config?: any) => { },
  put: async <T>(path: string, params?: Record<string, any>, config?: any) => { },
  delete: async <T>(path: string, params?: any, config?: any) => { },
}