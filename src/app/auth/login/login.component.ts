import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private appService: AppService,
  ) { }

  ngOnInit() {
  }

  public signIn() {
    this.appService.signIn();
  }
}
