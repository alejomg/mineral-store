import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- FormsModule isn't available by default, it must opt-in to using it.

import { AppComponent } from './app.component';
import { MineralComponent } from './mineral/mineral.component';
import { MineralDetailComponent } from './mineral-detail/mineral-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MineralComponent,
    MineralDetailComponent
  ],
  imports: [
	BrowserModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
