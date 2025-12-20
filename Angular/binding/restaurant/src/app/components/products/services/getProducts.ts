import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductsiNT } from "../model/products.interface";

@Injectable({
  providedIn: 'root',
})

export class GetProducts {
  public http = inject(HttpClient);

  public getProducts():Observable<ProductsiNT>{
    return this.http.get<ProductsiNT>('https://restaurant.stepprojects.ge/api/Products/GetAll')
  }
}