export interface Product {
    id: string;
    name: string;
    basePrice: number;
    discountPrice: number;
    rating: number;
    image: ImageData
    description: string;
}

export interface ImageData {
    id: number;
    name: string;
    type: string;
    data: string;
    forCatalogue: string;
}
