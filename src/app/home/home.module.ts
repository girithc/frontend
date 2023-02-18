import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HomeComponent } from './home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
    ],
    declarations: [
      TopbarComponent,
      SidebarComponent,
      FooterComponent,
      HomeComponent,
      MenuComponent,
    ]
})
export class HomeModule { }
