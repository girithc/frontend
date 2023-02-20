import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectCollegesComponent } from './select-colleges.component';
import { SelectCollegesRoutingModule } from './select-colleges-routing.module';


@NgModule({
    imports: [
        CommonModule,
        SelectCollegesRoutingModule
    ],
    declarations: [
      SelectCollegesComponent
    ]
})
export class HomeModule { }
