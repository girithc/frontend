import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LandingComponent } from '../landing.component';


const routes: Routes = [
    { 
        path: '',
        component: LandingComponent, 
    },
  ];
  
  @NgModule({
    declarations: [],
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
  })
export class LandingRoutingModule { }
