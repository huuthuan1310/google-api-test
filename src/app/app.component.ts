import { DriveResource } from './google-drive-resource';
import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleApiService } from 'ng-gapi';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'google-api-test';
  public sheetId: string;
  public sheet: any;
  public foundSheet: any;

  constructor(
    private userService: AppService,
    private route: ActivatedRoute,
    private gapiService: GoogleApiService,
    private driveResource: DriveResource) {
    // First make sure gapi is loaded can be in AppInitilizer
    this.gapiService.onLoad().subscribe();
  }

  ngOnInit() {
    this.route.fragment.subscribe((fragment) => {
      console.log(fragment);
    });
    this.driveResource.getList(this.userService.getToken()).subscribe(() => { }, (err: HttpErrorResponse) => {
      console.log(err);
      if (err.status === 401) {
        this.userService.signOut();
      }
    });
  }

  public isLoggedIn(): boolean {
    console.log('change detection');
    return this.userService.isUserSignedIn();
  }

  public signIn() {
    this.userService.signIn();
  }
}
