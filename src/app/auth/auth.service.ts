import { Router } from '@angular/router';
import { GoogleAuthService } from 'ng-gapi/lib/GoogleAuthService';
import { Injectable, NgZone } from '@angular/core';
import * as _ from 'lodash';
import GoogleUser = gapi.auth2.GoogleUser;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public static readonly SESSION_STORAGE_KEY: string = 'accessToken';
  private user: GoogleUser = undefined;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(
    private googleAuthService: GoogleAuthService,
    private router: Router,
    private ngZone: NgZone
  ) {}

  public signIn() {
    this.googleAuthService.getAuth().subscribe(auth => {
      auth
        .signIn()
        .then(
          res => this.signInSuccessHandler(res),
          err => this.signInErrorHandler(err)
        );
    });
  }

  public isUserSignedIn(): boolean {
    return !_.isEmpty(sessionStorage.getItem(AuthService.SESSION_STORAGE_KEY));
  }

  // TODO: Rework
  public signOut(): void {
    this.googleAuthService.getAuth().subscribe(auth => {
      try {
        auth.signOut();
      } catch (e) {
        console.error(e);
      }
      sessionStorage.removeItem(AuthService.SESSION_STORAGE_KEY);
    });
  }

  private signInSuccessHandler(res: GoogleUser) {
    this.ngZone.run(() => {
      this.user = res;
      sessionStorage.setItem(
        AuthService.SESSION_STORAGE_KEY,
        res.getAuthResponse().access_token
      );
      this.router.navigate([this.redirectUrl]);
    });
  }

  private signInErrorHandler(err) {
    console.warn(err);
  }

  public setUser(user: GoogleUser): void {
    this.user = user;
  }

  public getCurrentUser(): GoogleUser {
    return this.user;
  }

  public getToken(): string {
    const token: string = sessionStorage.getItem(
      AuthService.SESSION_STORAGE_KEY
    );
    if (!token) {
      throw new Error('no token set , authentication required');
    }
    return sessionStorage.getItem(AuthService.SESSION_STORAGE_KEY);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
