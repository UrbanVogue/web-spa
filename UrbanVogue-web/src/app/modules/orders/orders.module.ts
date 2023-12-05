import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderHistoryPageComponent } from './pages/order-history-page/order-history-page.component';



@NgModule({
    declarations: [
        OrderHistoryPageComponent
    ],
    exports: [
        OrderHistoryPageComponent
    ],
    imports: [
        CommonModule
    ]
})
export class OrdersModule { }
