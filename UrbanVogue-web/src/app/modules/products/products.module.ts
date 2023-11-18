import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';



@NgModule({
  declarations: [
    MainPageComponent,
    CatalogueComponent,
    ProductPageComponent
  ],
  exports: [
    MainPageComponent,
    CatalogueComponent,
    ProductPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
