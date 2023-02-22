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
        },


        { 
            path: 'select-colleges', 
            loadChildren: () => import('./components/screening/screening.module').then(m => m.ScreeningModule) 
        },
        { 
            path: 'saved-colleges', 
            loadChildren: () => import('./components/screening/screening.module').then(m => m.ScreeningModule) 
        },

        { 
            path: 'personal-info', 
            loadChildren: () => import('./components/screening/screening.module').then(m => m.ScreeningModule) 
        },
        { 
            path: 'education', 
            loadChildren: () => import('./components/screening/screening.module').then(m => m.ScreeningModule) 
        },

        { 
            path: 'college-app', 
            loadChildren: () => import('./components/screening/screening.module').then(m => m.ScreeningModule) 
        },
        { 
            path: 'pay', 
            loadChildren: () => import('./components/screening/screening.module').then(m => m.ScreeningModule) 
        },

        { 
            path: 'profile', 
            loadChildren: () => import('./components/screening/screening.module').then(m => m.ScreeningModule) 
        },
        { 
            path: 'settings', 
            loadChildren: () => import('./components/screening/screening.module').then(m => m.ScreeningModule) 
        },
        { 
            path: 'logout', 
            loadChildren: () => import('./components/screening/screening.module').then(m => m.ScreeningModule) 
        }
    ])],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
