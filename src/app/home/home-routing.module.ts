import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [RouterModule.forChild([
        { 
            path: '', 
            component: HomeComponent 
        },
        { 
            path: 'screening', 
            loadChildren: () => import('./components/screening/screening.module').then(m => m.ScreeningModule) 
        }
    ])],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
