import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
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
    component: HomeComponent,
    children: [
      {path: 'screening', loadChildren: () => import('./home/components/screening/screening.module').then(m => m.ScreeningModule)}
    ] 
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
