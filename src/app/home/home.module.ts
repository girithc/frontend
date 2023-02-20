import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TopbarComponent } from './components/topbar/topbar.component';
import { HomeComponent } from './home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuitemComponent } from './components/menu/menuitem/menuitem.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule
    ],
    declarations: [
      TopbarComponent,
      SidebarComponent,
      FooterComponent,
      HomeComponent,
      MenuComponent,
      MenuitemComponent,
    ]
})
export class HomeModule { }
