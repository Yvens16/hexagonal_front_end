import { Component, OnInit } from '@angular/core';
import ProductManagementHttpAdapter from '@framework/output/httpClient/ProductManagementHttpAdapter';
import { mirageHttpClient } from '@framework/output/httpClient/repository/mirageServer';
import ProductManagementInputPort from '@application/ports/input/ProductManagementInputPort';
import Product from '@domain/Product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  ngOnInit(): void {
    const productManagementInputPort = new ProductManagementInputPort(new ProductManagementHttpAdapter(mirageHttpClient));
    productManagementInputPort.getProducts().then((products) => {
      this.products = products;
    });
  }

}
