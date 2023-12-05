import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UpdateUserRequest} from "../../models/requests/update-user-request";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseUrl: string = 'http://localhost:8010/user';
  constructor(private readonly _httpClient: HttpClient) { }

  public updateUser(user: UpdateUserRequest): Observable<any> {
    const updateUrl = `${this.baseUrl}`;
    return this._httpClient.put<any>(updateUrl, user);
  }
}
