import {Injectable} from '@angular/core';
import {CartProduct} from "../../models/cart-product";
import {HttpClient} from "@angular/common/http";
import {CartRequest} from "../../models/requests/cart-request";
import {CartResponse} from "../../models/responses/cart-response";
import {catchError} from "rxjs";
import {tap} from "rxjs/operators";

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

                    let cartRequest = {} as CartRequest;
                    cartRequest.items = cartProducts;
                    cartRequest.username = 'user';

                    return this.http.post<CartResponse>('http://localhost:7777/api/v1/basket', cartRequest)
                        .subscribe(
                            data => {
                                console.log("cart added product, cart products: ");
                                console.log(data.items)
                            }
                        );
                },
                error: error => {
                    if (error.error.message === 'Basket not found') {
                        let cartRequest = {} as CartRequest;
                        cartRequest.items = [product];
                        cartRequest.username = 'user';

                        this.http.post<CartResponse>('http://localhost:7777/api/v1/basket', cartRequest)
                            .subscribe(
                                data => {
                                    console.log("cart created, added first product: ");
                                    console.log(data.items)
                                }
                            );
                    }
                }
            });
    }

    getItems() {
        return this.http.get<CartResponse>('http://localhost:7777/api/v1/basket/' + 'user');
    }

    deleteCartItem(cartItem: CartProduct) {
        this.getItems()
            .subscribe(
                cartResponse => {
                    let cartProducts = cartResponse.items;
                    for (const cartProduct of cartProducts) {
                        if(cartProduct.productId === cartItem.productId
                            && cartProduct.color === cartItem.color
                            && cartProduct.size === cartItem.size){
                            cartProducts.splice(cartProducts.indexOf(cartProduct), 1);
                            break;
                        }
                    }

                    if (cartProducts.length === 0) {
                        this.clearCart()
                            .pipe(
                                tap(data => console.log("cart deleted"))
                            )
                            .subscribe();
                        return;
                    }

                    let cartRequest = {} as CartRequest;
                    cartRequest.items = cartProducts;
                    cartRequest.username = 'user';

                    return this.http.post<CartResponse>('http://localhost:7777/api/v1/basket', cartRequest)
                        .pipe(
                            tap(data => {
                                console.log("cart item deleted, cart products left: ");
                                console.log(data.items);
                            })
                        )
                        .subscribe()
                });
    }

    clearCart() {
        return this.http.delete('http://localhost:7777/api/v1/basket/' + 'user');
    }

    changeCartItemQuantity(changedCartProduct: CartProduct, quantity: number) {
        this.getItems()
            .subscribe(
                cartResponse => {
                    let cartProducts = cartResponse.items;
                    for (const cartProduct of cartProducts) {
                        if(cartProduct.productId === changedCartProduct.productId
                            && cartProduct.color === changedCartProduct.color
                            && cartProduct.size === changedCartProduct.size){
                            cartProduct.quantity = quantity;
                            break;
                        }
                    }

                    let cartRequest = {} as CartRequest;
                    cartRequest.items = cartProducts;
                    cartRequest.username = 'user';

                    return this.http.post<CartResponse>('http://localhost:7777/api/v1/basket', cartRequest)
                        .pipe(
                            tap(data => {
                                console.log("cart item quantity changed, cart products: ");
                                console.log(data.items);
                            })
                        )
                        .subscribe()
                });
    }
}
