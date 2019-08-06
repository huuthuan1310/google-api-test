import { AuthService } from './../../auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DriveResource } from 'src/app/resources/google-drive-resource';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private driveResource: DriveResource
  ) {}

  ngOnInit() {
    this.driveResource.getList(this.authService.getToken()).subscribe(
      () => {},
      (err: HttpErrorResponse) => {
        console.log(err);
        if (err.status === 401) {
          this.authService.signOut();
        }
      }
    );
  }
}
