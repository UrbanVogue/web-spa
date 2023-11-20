import {Component, OnInit} from '@angular/core';
import {DetailedProduct} from "../../../../core/models/detailed-product";
import {Image} from "../../../../core/models/image";
import {ProductItem} from "../../../../core/models/product-item";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../../core/services/product.service";
import {CartService} from "../../../../core/services/cart.service";
import {CartProduct} from "../../../../core/models/cart-product";

@Component({
    selector: 'app-product-page',
    templateUrl: './product-page.component.html',
    styleUrls: ['./product-page.component.scss']
})

export class ProductPageComponent implements OnInit {

    public product: DetailedProduct = {} as DetailedProduct;
    public images: Image[] = [];

    public productItems: ProductItem[] = [];
    public allColors: Set<string> = new Set<string>();
    public allSizes: Set<string> = new Set<string>();

    public activeColor: string = '';
    public sizesForActiveColor: string[] = [];

    public chosenSize: string = '';

    constructor(private readonly productService: ProductService,
                private route: ActivatedRoute,
                private readonly cartService: CartService
    ) {
    }

    changeActiveColor(color: string) {
        this.activeColor = color;

        this.sizesForActiveColor = [];
        for (let productItem in this.productItems) {
            if (this.productItems[productItem].color.toLowerCase() === color.toLowerCase()) {
                this.sizesForActiveColor.push(this.productItems[productItem].size);
            }
        }
        this.chosenSize = '';
    }

    chooseSize(size: string) {
        if (size === this.chosenSize) {
            this.chosenSize = '';
            return;
        }
        this.chosenSize = size;
    }

    isActiveSize(size: string): boolean {
        return this.sizesForActiveColor.includes(size);
    }

    addToCart() {
        if (this.chosenSize === '') {
            alert("Please choose size");
            return;
        }
        let productItem: ProductItem = {} as ProductItem;
        for (let item in this.productItems) {
            if (this.productItems[item].color.toLowerCase() === this.activeColor.toLowerCase() &&
                this.productItems[item].size === this.chosenSize) {
                productItem = this.productItems[item];
                break;
            }
        }
        if (productItem == null) {
            alert("Product item was not found");
            return;
        }

        const cartProduct = {} as CartProduct;
        cartProduct.quantity = 1;
        cartProduct.color = productItem.color;
        cartProduct.size = productItem.size;
        cartProduct.price = this.product.basePrice;
        cartProduct.productId = Number(this.product.id);
        cartProduct.productName = this.product.name;

        this.cartService.addToCart(cartProduct);
        alert("Product was added to cart");
    }

    ngOnInit(): void {
        const idParam = this.route.snapshot.paramMap.get('id');
        let productId: number = -1;
        if (idParam == null) {
            console.log("Product id was not provided")
            return;
        } else {
            productId = parseInt(idParam);
        }

        this.productService.getProductById(productId).subscribe((product) => {
            this.product = product;
            this.product.images.forEach((image) => {
                this.images.push(image);
            });
            this.productItems = this.product.productItems;
            this.productItems.forEach((productItem) => {
                this.allColors.add(productItem.color.toLowerCase());
                this.allSizes.add(productItem.size);
            });
            if (this.productItems != null && this.productItems.length > 0) {
                this.changeActiveColor(this.productItems[0].color);
                this.chooseSize(this.productItems[0].size);
            }
        });

    }
}
