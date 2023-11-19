import {Image} from "./image";

export interface Product {
    id: string;
    name: string;
    basePrice: number;
    discountPrice: number;
    rating: number;
    image: Image;
    description: string;
}
