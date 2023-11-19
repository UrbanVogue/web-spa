import {ProductItem} from "./product-item";
import {Image} from "./image";

export interface DetailedProduct {
    id: string;
    name: string;
    basePrice: number;
    discountPrice: number;
    rating: number;
    description: string;
    images: Image[];
    productItems: ProductItem[];
}