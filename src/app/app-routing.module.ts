import { NgModule } from '@angular/core';
/*import { CommonModule } from '@angular/common';*/
import { RouterModule, Routes } from '@angular/router';
import { MineralComponent } from './mineral/mineral.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { MineralDetailComponent }  from './mineral-detail/mineral-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'minerals', component: MineralComponent },
  { path: 'detail/:id', component: MineralDetailComponent }
];

// generally components are not declared in a routing module
// so @NgModule.declarations array and CommonModule references are commented
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  /*declarations: []*/
  exports: [RouterModule]   
})

export class AppRoutingModule { }
