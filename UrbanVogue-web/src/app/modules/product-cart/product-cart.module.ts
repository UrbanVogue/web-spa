import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCartPageComponent } from './pages/product-cart-page/product-cart-page.component';
import {ProductCartRoutingModule} from "./product-cart-routing.module";



@NgModule({
    declarations: [
        ProductCartPageComponent
    ],
    exports: [
        ProductCartPageComponent
    ],
    imports: [
        CommonModule,
        ProductCartRoutingModule
    ]
})
export class ProductCartModule { }
