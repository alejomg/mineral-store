import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- FormsModule isn't available by default, it must opt-in to using it.

import { AppComponent } from './app.component';
import { MineralComponent } from './mineral/mineral.component';
import { MineralDetailComponent } from './mineral-detail/mineral-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MineralComponent,
    MineralDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
	BrowserModule,
	FormsModule,
	AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
