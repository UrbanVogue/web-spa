import {Injectable} from '@angular/core';
import {CartProduct} from "../models/cart-product";
import {HttpClient} from "@angular/common/http";
import {CartRequest} from "../models/requests/cart-request";
import {CartResponse} from "../models/response/cart-response";
import {catchError} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CartService {

    constructor(private readonly http: HttpClient) {
    }

    addToCart(product: CartProduct) {
        this.getItems()
            .subscribe({
                next: cartResponse => {
                    let cartProducts = cartResponse.items;
                    cartProducts.push(product);
                    console.log(cartProducts)

                    let cartRequest = {} as CartRequest;
                    cartRequest.items = cartProducts;
                    cartRequest.username = 'user';

                    console.log(cartRequest)
                    return this.http.post('http://localhost:7777/api/v1/basket', cartRequest)
                        .subscribe(
                            data => {
                                console.log("cart post: " + data);
                            }
                        );
                },
                error: error => {
                    if (error.error.message === 'Basket not found') {
                        let cartRequest = {} as CartRequest;
                        cartRequest.items = [product];
                        cartRequest.username = 'user';

                        this.http.post('http://localhost:7777/api/v1/basket', cartRequest)
                            .subscribe(
                                data => {
                                    console.log("cart post: " + data);
                                }
                            );
                    }
                }
            });
    }

    getItems() {
        return this.http.get<CartResponse>('http://localhost:7777/api/v1/basket/' + 'user');
    }

    deleteCartItem(productName: string) {
    }

    clearCart() {
        return this.http.delete('http://localhost:7777/api/v1/basket/' + 'user');
    }

    changeCartItemQuantity(cartProduct: CartProduct, quantity: number) {
    }
}
