import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../../core/services/product.service";
import {Product} from "../../../../core/models/product";
import {Observable} from "rxjs";

@Component({
    selector: 'app-catalog-page',
    templateUrl: './catalogue.component.html',
    styleUrls: ['./catalogue.component.scss']
})


export class CatalogueComponent implements OnInit {
    public catalogProducts$!: Observable<Product[]>;

    
    constructor(private readonly productService: ProductService) {

    }

    ngOnInit(): void {
        this.catalogProducts$ = this.productService.getProducts();
    }
}
