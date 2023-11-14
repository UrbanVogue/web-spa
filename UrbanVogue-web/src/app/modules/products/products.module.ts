import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';



@NgModule({
  declarations: [
    MainPageComponent,
    CatalogueComponent
  ],
  exports: [
    MainPageComponent,
    CatalogueComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
