import { NgModule } from '@angular/core';
/*import { CommonModule } from '@angular/common';*/
import { RouterModule, Routes } from '@angular/router';
import {MineralComponent} from './mineral/mineral.component';

const routes: Routes = [
  { path: 'minerals', component: MineralComponent }
];

// generally components are not declared in a routing module
// so @NgModule.declarations array and CommonModule references are commented
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  /*declarations: []*/
  exports: [RouterModule]   
})

export class AppRoutingModule { }
