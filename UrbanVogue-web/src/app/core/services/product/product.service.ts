import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Product} from "../../models/product";
import {Observable} from "rxjs";
import {DetailedProduct} from "../../models/detailed-product";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private readonly http: HttpClient) {
    }

    public getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>('http://localhost:5003/catalogue');
    }

    public getProductById(id: number): Observable<DetailedProduct> {
        return this.http.get<DetailedProduct>('http://localhost:5003/catalogue/' + id);
    }

}
