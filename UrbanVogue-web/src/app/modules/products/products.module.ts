import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import {CoreModule} from "../../core/core.module";
import { ProductsRoutingModule } from './products-routing.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    MainPageComponent,
    CatalogueComponent,
    ProductPageComponent,
    CarouselComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgOptimizedImage,
    SharedModule,
    FormsModule
  ]
})
export class ProductsModule { }
