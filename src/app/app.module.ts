import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SnotifyModule, SnotifyService } from 'ng-snotify';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SnotifyModule
  ],
  providers: [
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
