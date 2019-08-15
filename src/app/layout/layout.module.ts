import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home.component';
import { DriveResource } from './../resources/google-drive-resource';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutRoutingMoule } from './layout-routing.module';
import { FolderModule } from 'src/@share/components';

@NgModule({
  imports: [CommonModule, LayoutRoutingMoule, FolderModule],
  declarations: [HomeComponent, LayoutComponent],
  providers: [DriveResource]
})
export class LayoutModule {}
