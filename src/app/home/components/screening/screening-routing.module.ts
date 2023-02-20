import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectCollegesComponent } from '../select-colleges/select-colleges.component';
import { ScreeningComponent } from './screening.component';

const routes: Routes = [
    {path: '', component: ScreeningComponent},
    {path: 'one', component: SelectCollegesComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ScreeningRoutingModule {}