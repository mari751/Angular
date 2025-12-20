import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { GetProducts } from './services/getProducts';
import { ProductsiNT } from './model/products.interface';
import { BehaviorSubject, catchError, finalize, Observable, of, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products implements OnInit, OnDestroy{
  public getproductsServ = inject(GetProducts);
  public productData: ProductsiNT[] | undefined;
  public destroy$ = new Subject();
  public hasError: boolean = false;

  ngOnInit(): void {
    this.getproductsServ.getProducts()
    .pipe(
      takeUntil(this.destroy$),
      tap((data) => {
        this.productData = data as unknown as ProductsiNT[];
        console.log(this.productData);
      }),
      catchError(() => {
        this.hasError = true;
        return of('error');
      }),
      finalize(() => {
        console.log('final')
      })
    )
    .subscribe();

    
  }

  ngOnDestroy(): void {
    this.destroy$.next;
    this.destroy$.complete();
  }
}
