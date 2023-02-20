import { Component, ElementRef } from '@angular/core';
import { HomeService } from '../../../service/home.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(public homeService: HomeService, public el: ElementRef) { }

}
