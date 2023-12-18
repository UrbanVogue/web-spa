import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OrderCheckoutPageComponent} from "./pages/order-checkout-page/order-checkout-page.component";
import {OrderHistoryPageComponent} from "./pages/order-history-page/order-history-page.component";

const routes: Routes = [
    {
        path: 'checkout',
        component: OrderCheckoutPageComponent
    },
    {
        path: 'history',
        component: OrderHistoryPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrdersRoutingModule { }