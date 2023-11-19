import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCartPageComponent } from './pages/product-cart-page/product-cart-page.component';



@NgModule({
    declarations: [
        ProductCartPageComponent
    ],
    exports: [
        ProductCartPageComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ProductCartModule { }
