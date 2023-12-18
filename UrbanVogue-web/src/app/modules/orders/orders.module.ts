import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderHistoryPageComponent} from './pages/order-history-page/order-history-page.component';
import {OrdersRoutingModule} from "./orders-routing.module";
import {OrderCheckoutPageComponent} from "./pages/order-checkout-page/order-checkout-page.component";
import {RouterModule} from "@angular/router";


@NgModule({
    declarations: [
        OrderHistoryPageComponent,
        OrderCheckoutPageComponent
    ],
    exports: [
        OrderHistoryPageComponent,
        OrderCheckoutPageComponent
    ],
    imports: [
        CommonModule,
        OrdersRoutingModule
    ]
})
export class OrdersModule {
}
