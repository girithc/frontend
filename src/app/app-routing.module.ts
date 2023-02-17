import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LandingModule } from './pages/landing/landing.module';
import { LandingRoutingModule } from './pages/landing/routing/landing-routing.module';

const routes: Routes = [
  { 
    path: '', 
    component: LandingComponent,
    children: [
      
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
