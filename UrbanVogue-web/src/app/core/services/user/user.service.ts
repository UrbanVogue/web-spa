import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UpdateUserRequest} from "../../models/requests/update-user-request";
import {UserDetails} from "../../models/user-profile";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseUrl: string = 'http://localhost:8010/user';
  constructor(private readonly _httpClient: HttpClient) { }

  private authenticatedUserName : string = 'user';

  public updateUser(user: UpdateUserRequest): Observable<any> {
    const updateUrl = `${this.baseUrl}`;
    return this._httpClient.put<any>(updateUrl, user);
  }

  public deactivateUser(): Observable<any> {
    const deactivateUserUrl = `${this.baseUrl}/deactivate`;
    return this._httpClient.post<any>(deactivateUserUrl, {});
  }

  public getUserData(): Observable<UserDetails> {
    return this._httpClient.get<UserDetails>('http://localhost:8010/connect/userinfo');
  }

  changeUserEmail(email: string) {
    window.location.href = `http://localhost:8010/Account/ChangeEmail?username=${email}`;
  }
}
