import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import {CoreModule} from "../../core/core.module";
import { ProductsRoutingModule } from './products-routing.module';



@NgModule({
  declarations: [
    MainPageComponent,
    CatalogueComponent,
    ProductPageComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
      NgOptimizedImage
    ]
})
export class ProductsModule { }
