import {CartProduct} from "../cart-product";

export interface CartResponse {
    username: string;
    items: CartProduct[];
    totalPrice: number;
}
