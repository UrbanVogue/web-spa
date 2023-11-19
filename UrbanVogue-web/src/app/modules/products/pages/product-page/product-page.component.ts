import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../../core/services/product.service";
import {Product} from "../../../../core/models/product";
import {empty, Observable} from "rxjs";
import {DetailedProduct} from "../../../../core/models/detailed-product";
import {Image} from "../../../../core/models/image";
import {ProductItem} from "../../../../core/models/product-item";

@Component({
    selector: 'app-product-page',
    templateUrl: './product-page.component.html',
    styleUrls: ['./product-page.component.scss']
})

export class ProductPageComponent implements OnInit{

    public product: DetailedProduct = {} as DetailedProduct;
    public images: Image[] = [];

    public productItems: ProductItem[] = [];
    public allColors: Set<string> = new Set<string>();
    public allSizes: Set<string> = new Set<string>();

    public activeColor: string = '';
    public sizesForActiveColor: string[] = [];

    public chosenSize: string = '';

    constructor(private readonly productService: ProductService) {

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

    ngOnInit(): void {
        this.productService.getProductById(2).subscribe((product) => {
            this.product = product;
            this.product.images.forEach((image) => {
                this.images.push(image);
            });
            this.productItems = this.product.productItems;
            this.productItems.forEach((productItem) => {
                this.allColors.add(productItem.color.toLowerCase());
                this.allSizes.add(productItem.size);
            });
        });

    }
}
