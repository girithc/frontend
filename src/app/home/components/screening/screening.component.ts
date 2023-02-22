import { Component, OnInit } from '@angular/core';

import { MenuItem } from "primeng/api";
import { SelectItem } from "primeng/api";
import { SelectItemGroup } from "primeng/api";
import { FilterService } from "primeng/api";

interface Car {
  name?: string;
  code?: string;
}

@Component({
  selector: 'app-screening',
  templateUrl: './screening.component.html',
  styleUrls: ['./screening.component.scss']
})


export class ScreeningComponent {



    
    cars:Car[];

    selectedCar: Car;

  
    constructor() 
    {
        this.cars = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
          ];
    }


}
