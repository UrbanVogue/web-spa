import {CartProduct} from "../cart-product";

export interface CartRequest {
    username: string;
    items: CartProduct[];
}
