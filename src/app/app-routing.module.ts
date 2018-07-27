import { NgModule } from '@angular/core';
/*import { CommonModule } from '@angular/common';*/
import { RouterModule, Routes } from '@angular/router';

// generally components are not declared in a routing module
// so @NgModule.declarations array and CommonModule references are commented

@NgModule({
  /*imports: [
    CommonModule
  ],
  declarations: []*/
  exports: [RouterModule]
})

export class AppRoutingModule { }
