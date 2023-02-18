import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HomeComponent } from './home.component';


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
    ],
    declarations: [
      TopbarComponent,
      HomeComponent,
    ]
})
export class HomeModule { }
