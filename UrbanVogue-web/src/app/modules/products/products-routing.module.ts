import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages';
import { AuthorizationGuard } from 'src/app/core/guards/auth.guard';
import { CatalogueComponent } from './pages';
import {ProductPageComponent} from "./pages/product-page/product-page.component";

const routes: Routes = [
  { path: '', component: MainPageComponent },
  {
    path: 'catalogue',
    component: CatalogueComponent,
    //canActivate: [AuthorizationGuard], ToDo: uncomment after completed or remove
  },
  {
    path: 'product',  // ToDo: uncomment after completed or remove
    component: ProductPageComponent,
    //canActivate: [AuthorizationGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
