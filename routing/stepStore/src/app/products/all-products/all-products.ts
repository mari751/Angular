import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../model/products.interface';
import { ProductsServ } from '../services/productsServ';
import { Subject, takeUntil, tap } from 'rxjs';
import { Router } from '@angular/router';
import { ɵnormalizeQueryParams } from '@angular/common';

@Component({
  selector: 'app-all-products',
  imports: [],
  templateUrl: './all-products.html',
  styleUrl: './all-products.scss',
})
export class AllProducts implements OnInit, OnDestroy {

  products: Product[] = [];
  private productServ = inject(ProductsServ);
  private $destroy = new Subject<void>();
  private router = inject(Router)

  ngOnInit(): void {
    this.productServ.getAllProducts()
      .pipe(
        takeUntil(this.$destroy),
        tap((res) => {
          this.products = res.products;
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }
  Details(id: string){
    this.router.navigate(['/products', id], {
      queryParams: {id: id}
    })
  }
}