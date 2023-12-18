import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./modules/product-cart/product-cart.module').then(m => m.ProductCartModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./modules/orders/orders-routing.module').then(m => m.OrdersRoutingModule)
  },
  {
    path: '**', // Додайте відсилання на головну сторінку для невідомих маршрутів
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
