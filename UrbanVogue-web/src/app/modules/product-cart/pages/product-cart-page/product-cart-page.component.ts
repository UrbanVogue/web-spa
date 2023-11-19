import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../../core/services/cart.service";
import {CartProduct} from "../../../../core/models/cart-product";
import {ProductService} from "../../../../core/services/product.service";
import {Product} from "../../../../core/models/product";

@Component({
    selector: 'app-product-cart-page',
    templateUrl: './product-cart-page.component.html',
    styleUrls: ['./product-cart-page.component.scss']
})
export class ProductCartPageComponent implements OnInit {
    constructor(
        private readonly cartService: CartService,
        private readonly productService: ProductService
    ) {
    }

    public cartProducts = [] as CartProduct[];
    public cartSum: number = 0;
    public products = [] as Product[];

    ngOnInit(): void {
        this.cartService.getItems().subscribe(data => {
            this.cartProducts = data.items;
            this.cartSum = data.totalPrice;
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
