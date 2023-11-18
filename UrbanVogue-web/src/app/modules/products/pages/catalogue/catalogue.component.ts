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
    public sortingTypes!: SortingType[];
    public selectedSortingId: number = 0;

    constructor(private readonly productService: ProductService) {
        this.sortingTypes = [
            {id: 0, name: 'За популярністю'},
            {id: 1, name: 'За рейтингом'},
            {id: 2, name: 'За рейтингом'},
            {id: 3, name: 'За популярністю'}
        ]
    }

    ngOnInit(): void {
        this.refresh();
    }

    refresh(){
        this.catalogProducts$ = this.productService.getProducts();
    }

    onSortingChanged(sortingId:string){
       this.selectedSortingId = parseInt(sortingId);
        this.refresh();
    }
}

export interface SortingType{
    id: number;
    name: string;
}
