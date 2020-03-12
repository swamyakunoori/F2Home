import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { FirstAccorianComponent } from './first-accorian/first-accorian.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { CarouselsFirstComponent } from './carousels-first/carousels-first.component';
import { GroupCompanyComponent } from './group-company/group-company.component';
import { GalleryFirstComponent } from './gallery-first/gallery-first.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstAccorianComponent,
    NavbarMenuComponent,
    CarouselsFirstComponent,
    GroupCompanyComponent,
    GalleryFirstComponent
  ],
  imports: [
    NgbModule,
    NgbAlertModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
