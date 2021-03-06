import { Component, OnInit } from '@angular/core';
import { GoogleApiService } from 'ng-gapi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'google-api-test';

  constructor(private gapiService: GoogleApiService) {
    // First make sure gapi is loaded can be in AppInitilizer
    this.gapiService.onLoad().subscribe();
  }

  ngOnInit() {}
}
