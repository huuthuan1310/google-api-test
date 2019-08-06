import { HttpErrorResponse } from '@angular/common/http';
import { AppService } from './../app.service';
import { DriveResource } from './../google-drive-resource';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private appService: AppService,
    private driveResource: DriveResource
  ) { }

  ngOnInit() {
    this.driveResource.getList(this.appService.getToken()).subscribe(() => { }, (err: HttpErrorResponse) => {
      console.log(err);
      if (err.status === 401) {
        this.appService.signOut();
      }
    });
  }

}
