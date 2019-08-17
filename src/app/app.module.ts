import { CoreModule } from './../@core/core.modules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { LayoutModule } from './layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { GoogleApiModule, NgGapiClientConfig, NG_GAPI_CONFIG } from 'ng-gapi';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const gapiClientConfig: NgGapiClientConfig = {
  client_id:
    '402271985389-atpk31e9attb5s1vbs0u38dunn5uoah9.apps.googleusercontent.com',
  discoveryDocs: [
    'https://analyticsreporting.googleapis.com/$discovery/rest?version=v4'
  ],
  ux_mode: 'popup',
  scope: [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/drive.appdata',
    'https://www.googleapis.com/auth/drive.file',
    'https://www.googleapis.com/auth/drive.metadata',
    'https://www.googleapis.com/auth/drive.metadata.readonly',
    'https://www.googleapis.com/auth/drive.photos.readonly',
    'https://www.googleapis.com/auth/drive.readonly'
  ].join(' ')
};
@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
    HttpClientModule,
    LayoutModule,
    AuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
