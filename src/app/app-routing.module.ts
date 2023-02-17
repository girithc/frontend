import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { 
    path: '', 
    component: LandingComponent,
  },
  { 
    path: 'login', 
    component: LoginComponent
  },
  { 
    path: 'home', 
    component: HomeComponent
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
