import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, public router: Router) {}

  ngOnInit() {
    if (this.authService.isUserSignedIn()) {
      // Get the redirect URL from our auth service
      // If no redirect has been set, use the default
      const redirect = this.authService.redirectUrl
        ? this.router.parseUrl(this.authService.redirectUrl)
        : '/layout';

      // Redirect the user
      this.router.navigateByUrl(redirect);
    }
  }

  public signIn() {
    this.authService.signIn();
  }
}
