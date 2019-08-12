import { AuthService } from './../auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  constructor(private authService: AuthService, public router: Router) {}

  ngOnInit() {
    if (this.authService.isUserSignedIn()) {
      // Get the redirect URL from our auth service
      // If no redirect has been set, use the default
      const redirect = this.authService.redirectUrl
        ? this.router.parseUrl(this.authService.redirectUrl)
        : '';

      // Redirect the user
      this.router.navigateByUrl(redirect);
    }
  }
}
