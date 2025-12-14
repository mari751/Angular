import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Menu } from './components/menu/menu';
import { OrderOnline } from './components/order-online/order-online';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'menu',
    component: Menu
  },
  {
    path: 'orderOnline',
    component: OrderOnline
  },
  {
    path: 'contact',
    component: Contact
  }
];
