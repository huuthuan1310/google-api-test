import { AppService } from './../app.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './../home/home.component';
import { LayoutRoutingMoule } from './layout-routing.module';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingMoule
    ],
    declarations: [
        HomeComponent
    ],
    providers: [AppService]
})
export class LayoutModule { }
