import {Component} from '@angular/core';
import {ProductService} from "../../../../core/services/product.service";
import {Product} from "../../../../core/models/product";

@Component({
    selector: 'app-product-page',
    templateUrl: './product-page.component.html',
    styleUrls: ['./product-page.component.scss']
})

export class ProductPageComponent {

    constructor(public readonly productService: ProductService) {
    }

    // testService() {
    //     let res = this.productService.getProducts()
    //         .pipe(tap(response => {
    //             console.log(response)
    //         }));
    //
    //     let products = res.subscribe();
    // }

    testService() {

        let res = this.productService.getProducts()
         .subscribe();

        // let products: Product[] = []
        //
        //  res.subscribe({
        //         next: (v) => v.map(x => products.push(x)),
        //         error: (e) => console.error(e),
        //     });

        console.log(res);
        }
    }
