import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { MainPageComponent } from './pages';
import { CatalogueComponent } from './pages';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductsRoutingModule } from './products-routing.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";



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
    FormsModule,
    RouterModule
  ]
})
export class ProductsModule { }
