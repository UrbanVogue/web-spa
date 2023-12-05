import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../../../core/services/cart/cart.service";
import {CartProduct} from "../../../../core/models/cart-product";
import {ProductService} from "../../../../core/services/product/product.service";
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
        this.cartService.deleteCartItem(cartProduct);
        this.cartProducts = this.cartProducts.filter(product => product !== cartProduct);
        this.cartSum -= cartProduct.price * cartProduct.quantity;
    }

    changeCartItemQuantity(cartProduct: CartProduct, quantity: string) {
        this.cartService.changeCartItemQuantity(cartProduct, Number(quantity));
        this.cartProducts = this.cartProducts
            .map(product => {
                if (product === cartProduct) {
                    product.quantity = Number(quantity);
                }
                return product;
            });
        this.cartSum = this.cartProducts.reduce((sum, product) => sum + product.price * product.quantity, 0);
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
