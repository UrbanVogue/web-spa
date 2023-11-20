import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSigninRedirectCallbackComponent } from './app-signin-redirect-callback.component';

describe('AppSigninRedirectCallbackComponent', () => {
  let component: AppSigninRedirectCallbackComponent;
  let fixture: ComponentFixture<AppSigninRedirectCallbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppSigninRedirectCallbackComponent]
    });
    fixture = TestBed.createComponent(AppSigninRedirectCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
