import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UserDetails } from 'src/app/core/models/user-profile';
import { AuthService } from 'src/app/core/services';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  public userProfile$!: Observable<UserDetails>;

  constructor(private readonly _authService: AuthService){

  }
  ngOnInit(): void {
     this.userProfile$ = this._authService.userProfile$;
  }
}
