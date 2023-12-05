import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages';
import { CatalogueComponent } from './pages';
import {ProductPageComponent} from "./pages/product-page/product-page.component";

const routes: Routes = [
  { path: '', component: MainPageComponent },
  {
    path: 'catalogue',
    component: CatalogueComponent
  },
  {
    path: 'catalogue/:id',
    component: ProductPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
