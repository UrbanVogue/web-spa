import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../../core/services/cart.service";
import {CartProduct} from "../../../../core/models/cart-product";
import {ProductService} from "../../../../core/services/product.service";
import {Product} from "../../../../core/models/product";
import {catchError} from "rxjs";

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

    clearCart() {
        this.cartService.clearCart().subscribe();
        this.cartProducts = [];
        this.cartSum = 0;
    }

    deleteCartItem(cartProduct: CartProduct) {

    }

    changeCartItemQuantity(cartProduct: CartProduct, quantity: number) {

    }

    ngOnInit(): void {
        this.cartService.getItems()
            .subscribe({
                next: data => {
                    this.cartProducts = data.items;
                    this.cartSum = data.totalPrice;
                },
                error: error => {
                    if (error.error.message === 'Basket not found') {
                        console.log('Basket not found')
                        this.cartProducts = [];
                    } else {
                        console.log("Unexpected ERROR: " + error.error.message);
                    }
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
