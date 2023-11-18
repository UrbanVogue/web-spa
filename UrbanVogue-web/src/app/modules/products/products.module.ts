import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { ProductsRoutingModule } from './products-routing.module';



@NgModule({
  declarations: [
    MainPageComponent,
    CatalogueComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
