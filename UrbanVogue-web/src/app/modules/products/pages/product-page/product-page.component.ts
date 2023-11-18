import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../../core/services/product.service";
import {Product} from "../../../../core/models/product";
import {Observable} from "rxjs";
import {DetailedProduct} from "../../../../core/models/detailed-product";
import {Image} from "../../../../core/models/image";

@Component({
    selector: 'app-product-page',
    templateUrl: './product-page.component.html',
    styleUrls: ['./product-page.component.scss']
})

export class ProductPageComponent implements OnInit{

    public product: DetailedProduct = {} as DetailedProduct;
    public images: Image[] = [];

    constructor(private readonly productService: ProductService) {

    }

    ngOnInit(): void {
        this.productService.getProductById(2).subscribe((product) => {

            this.product = product;

            this.product.images.forEach((image) => {
                this.images.push(image);
            });

        });
        console.log(this.images)
    }
}
