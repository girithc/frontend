import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectCollegesComponent } from './select-colleges.component';

const routes: Routes = [
    {path: '', component: SelectCollegesComponent},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SelectCollegesRoutingModule { }
