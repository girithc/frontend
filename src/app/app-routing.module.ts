import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  { 
    path: '', 
    component: LandingComponent,
  },
  { 
    path: 'auth', 
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) 
  },
  { 
    path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
