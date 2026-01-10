import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../model/products.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsServ } from '../services/productsServ';
import { BehaviorSubject, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails implements OnInit, OnDestroy {
  product: Product | null = null;
  private router = inject(Router);
  private productsServ = inject(ProductsServ)
  constructor(private route: ActivatedRoute){}
  private $destroy = new Subject<void>();

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if(productId){
      this.productsServ.getProduct(productId)
      .pipe(
        takeUntil(this.$destroy),
        tap((product)=>{
          this.product = product;
        })
      ).subscribe();
    }
  }

  goBack(){
    this.router.navigate([''])
  }
  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
