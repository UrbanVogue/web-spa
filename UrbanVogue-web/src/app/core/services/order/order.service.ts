import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../user/user.service";
import {Order} from "../../models/order";
import {OrderRequest} from "../../models/requests/order-request";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
      private readonly http: HttpClient,
      private readonly userService: UserService
  ) {}

    getOrders() {
        return this.http.get<Order[]>('http://localhost:8004/api/v1/Order/' + this.userService.getUserName());
    }
}
