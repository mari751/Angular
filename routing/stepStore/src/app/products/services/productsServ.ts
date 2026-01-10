import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Product, ProductsResponse } from "../model/products.interface";

@Injectable ({ providedIn: 'root'})

export class ProductsServ {
  private http = inject(HttpClient)

  getAllProducts(){
    return this.http.get<ProductsResponse>('https://api.everrest.educata.dev/shop/products/all')
  }

  getProduct(id: string){
    return this.http.get<Product>(`https://api.everrest.educata.dev/shop/products/id/${id}`)
  }
}