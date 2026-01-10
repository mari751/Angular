import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AllProducts } from './products/all-products/all-products';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('stepStore');
}
