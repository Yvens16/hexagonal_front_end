"use client";
import React, { useEffect, useState } from 'react'
import ProductManagementInputPort from '@application/ports/input/ProductManagementInputPort'
import ProductManagementHttpAdapter from '@framework/output/httpClient/ProductManagementHttpAdapter'
import Product from '@domain/Product'
import {mirageHttpClient} from '@framework/output/httpClient/repository/mirageServer';


export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const productService = new ProductManagementInputPort(new ProductManagementHttpAdapter(mirageHttpClient))
    productService.getProducts().then((products: Product[]) => setProducts(products))
  }, [])

  return (
    <div className='product-list'>
      {products.map(product => <div key={product.id.getId()} className='product'>{product.title}</div>)}
    </div>
  )
}