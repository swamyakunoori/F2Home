import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { FirstAccorianComponent } from './first-accorian/first-accorian.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstAccorianComponent
  ],
  imports: [
    NgbModule,
    NgbAlertModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
