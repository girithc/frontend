import { Component } from '@angular/core';

interface Car {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
}

@Component({
  selector: 'app-screening',
  templateUrl: './screening.component.html',
  styleUrls: ['./screening.component.scss']
})


export class ScreeningComponent {
  cars: Car[] = [];
  
  constructor() { }

  ngOnInit() {
      this.cars = [
          {
              id: '1',
              name: 'Bugatti',
              description: 'Racing car',
              price: 800,
          },
          {
              id: '2',
              name: 'Ferrari',
              description: 'The Prancing Horse',
              price: 1500,
          },
          {
              id: '3',
              name: 'Porsche',
              description: 'Full spectrum',
              price: 10000,
          },
      ];
  }
}
