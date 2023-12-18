import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../../../core/services/order/order.service";
import {OrderRequest} from "../../../../core/models/requests/order-request";
import {Order} from "../../../../core/models/order";
import {ProductService} from "../../../../core/services";
import {Product} from "../../../../core/models/product";

@Component({
    selector: 'app-order-history-page',
    templateUrl: './order-history-page.component.html',
    styleUrls: ['./order-history-page.component.scss']
})
export class OrderHistoryPageComponent implements OnInit {

    constructor(
        private readonly orderService: OrderService,
        private readonly productService: ProductService
    ) {
    }

    orders: Order[] = [] as Order[];
    products = [] as Product[];

    ngOnInit(): void {
        this.orderService.getOrders().subscribe(
            {
                next: data => {
                        this.orders = data;
                    }
            });
        this.productService.getProducts().subscribe(data => {
                this.products = data;
            }
        );
    }

    getImageById(productId: number) {
        return this.products.filter(product => Number(product.id) === productId)[0].image.data;
    }
}
