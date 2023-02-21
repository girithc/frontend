import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectCollegesComponent } from '../select-colleges/select-colleges.component';
import { ScreenOneComponent } from './screen-one/screen-one.component';
import { ScreeningComponent } from './screening.component';

const routes: Routes = [
    {path: '', component: ScreeningComponent},
    {path: 'screen-one', component: ScreenOneComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ScreeningRoutingModule {}