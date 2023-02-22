import { CommonModule } from "@angular/common";
import { Input, NgModule } from "@angular/core";
import {FormsModule} from '@angular/forms';


import { ScreeningRoutingModule } from "./screening-routing.module";
import { ScreeningComponent } from './screening.component';

import {CarouselModule} from 'primeng/carousel';
import {Button, ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';

import { SelectItem } from 'primeng/api';
import { AutoCompleteModule } from "primeng/autocomplete";
import { Calendar, CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumber, InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { ScreenOneComponent } from './screen-one/screen-one.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: 
    [
        CommonModule,
        ScreeningRoutingModule,
        CarouselModule,
        ButtonModule,
        FormsModule,
        AutoCompleteModule,
		DropdownModule,
		InputMaskModule,
		InputNumberModule,
		InputTextareaModule,
		InputTextModule,
    ],
    declarations: 
    [
        ScreeningComponent,
        ScreenOneComponent,
    ]

})

export class ScreeningModule {}