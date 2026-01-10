import { Routes } from '@angular/router';
import { AllProducts } from './products/all-products/all-products';
import { ProductDetails } from './products/product-details/product-details';

export const routes: Routes = [
  {
    path: '',
    component: AllProducts
  },
  {
    path: 'products/:id',
    component: ProductDetails
  }
];
