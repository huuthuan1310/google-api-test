import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home.component';
import { DriveResource } from './../resources/google-drive-resource';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutRoutingMoule } from './layout-routing.module';

@NgModule({
  imports: [CommonModule, LayoutRoutingMoule],
  declarations: [HomeComponent, LayoutComponent],
  providers: [DriveResource]
})
export class LayoutModule {}
