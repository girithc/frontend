import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { TopbarComponent } from './components/layout/topbar/topbar.component';
import { HomeComponent } from './home.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MenuComponent } from './components/layout/menu/menu.component';
import { MenuitemComponent } from './components/layout/menu/menuitem/menuitem.component';
import { HomeRoutingModule } from './home-routing.module';
import { StorageService } from '../services/storage.service';
import { AuthService } from '../services/auth.service';
import { HomeService } from './service/home.service';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        RouterModule, 
        HttpClientModule
    ],
    declarations: [
      TopbarComponent,
      SidebarComponent,
      FooterComponent,
      HomeComponent,
      MenuComponent,
      MenuitemComponent,
    ],
    providers:[StorageService, AuthService, HomeService]
})
export class HomeModule { }
