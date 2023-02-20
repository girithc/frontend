import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TopbarComponent } from './components/layout/topbar/topbar.component';
import { HomeComponent } from './home.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MenuComponent } from './components/layout/menu/menu.component';
import { MenuitemComponent } from './components/layout/menu/menuitem/menuitem.component';
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
