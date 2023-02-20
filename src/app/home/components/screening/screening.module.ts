import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ScreeningRoutingModule } from "./screening-routing.module";
import { ScreeningComponent } from './screening.component';

@NgModule({
    imports: [
        CommonModule,
        ScreeningRoutingModule
    ],
    declarations: [
        ScreeningComponent,
    ]
})

export class ScreeningModule {}