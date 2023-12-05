import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetails } from 'src/app/core/models/user-profile';
import { AuthService, UserService } from 'src/app/core/services';
import { Router } from "@angular/router";
import { take } from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
    public userProfile$!: Observable<UserDetails>;
    public initialUser! : UserDetails;
    public userForm!: FormGroup;

    constructor(
        private readonly _authService: AuthService,
        private readonly _userService: UserService,
        private readonly _router: Router,
        private readonly formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.userProfile$ = this._authService.userProfile$;
        this.userProfile$.pipe(take(1)).subscribe(user => {
            this.initialUser = {...user}
            this.userForm = this.formBuilder.group({
                email: [user.email, Validators.email],
                firstName: [user.firstName, Validators.required],
                lastName: [user.lastName, Validators.required]
            });
        });
    }

    logout() {
        this._authService.logout().subscribe(_ => this._router.parseUrl(''));
    }

    resetProfileChanges() {
        this.userForm.reset(this.initialUser);
    }

    applyProfileChanges() {
        if (this.userForm.valid) {
            const updatedUser = this.userForm.value as UserDetails;
            this._userService.updateUser(updatedUser).subscribe(() => {
                this.initialUser = { ...updatedUser };
            });
        }
    }
}
