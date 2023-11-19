import {Injectable} from '@angular/core';
import {CartProduct} from "../models/cart-product";
import {HttpClient} from "@angular/common/http";
import {CartRequest} from "../models/requests/cart-request";
import {CartResponse} from "../models/response/cart-response";
import {tap} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class CartService {

    constructor(private readonly http: HttpClient) {
    }

    addToCart(product: CartProduct) {
        this.getItems().subscribe(cartResponse => {
            let cartProducts = cartResponse.items;
            cartProducts.push(product);
            console.log(cartProducts)
            let cartRequest = {} as CartRequest;
            cartRequest.items = cartProducts;
            cartRequest.username = 'user';
            console.log(cartRequest)
            return this.http.post('http://localhost:7777/api/v1/basket', cartRequest).subscribe(
                data => {
                    console.log("cart post: " + data);
                }
            );
        });

    }

    getItems() {
        return this.http.get<CartResponse>('http://localhost:5003/basket/' + 'user');
    }

    deleteItemByProductName(productName: string) {
    }

    clearCart() {
    }

}
