import {Component, OnInit} from '@angular/core';
import {CartService, ProductService, UserService} from "../../../../core/services";
import {UserDetails} from "../../../../core/models/user-profile";
import {CartProduct} from "../../../../core/models/cart-product";
import {Product} from "../../../../core/models/product";

@Component({
  selector: 'app-order-checkout-page',
  templateUrl: './order-checkout-page.component.html',
  styleUrls: ['./order-checkout-page.component.scss']
})
export class OrderCheckoutPageComponent implements OnInit{

    constructor(
        private readonly cartService: CartService,
        private readonly userService: UserService,
        private readonly productService: ProductService
    ) {
    }

    userDetails: UserDetails = {} as UserDetails;
    cartProducts = [] as CartProduct[];
    products = [] as Product[];


    sum: number = 0;
    delivery: number = 119;
    totalPrice: number = 0;

    checkout() {
        console.log("checkout")
        this.cartService.checkout().subscribe();
    }

    ngOnInit(): void {
        this.userService.getUserData().subscribe({
            next: data => {
                this.userDetails = data;
            }
        });

        this.cartService.getItems()
            .subscribe({
                next: data => {
                    this.cartProducts = data.items;
                    this.sum = data.totalPrice;
                    this.totalPrice = this.sum + this.delivery;
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
