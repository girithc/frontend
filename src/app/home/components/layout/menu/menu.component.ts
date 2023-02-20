import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../service/home.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  model: any[] = [];

  constructor(public homeService: HomeService) { }

  ngOnInit() {
      this.model = [
          {
              label: 'Overview',
              items: [
                  { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['screening'] }
              ]
          },
          {
              label: 'My Colleges',
              items: [
                  { label: 'Select Colleges', icon: 'pi pi-fw pi-id-card', routerLink: ['screening/one'] },
                  { label: 'Saved Colleges', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
              ]
          },
          {
              label: 'Pre-Application',
              items: [
                  { label: 'Personal Information', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks'], badge: 'NEW' },
                  { label: 'Education ', icon: 'pi pi-fw pi-globe', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank' },
              ]
          },
          {
              label: 'Application',
              items: [
                  { label: 'College Application', icon: 'pi pi-fw pi-prime', routerLink: ['/utilities/icons'] },
                  { label: 'Pay', icon: 'pi pi-fw pi-bitcoin', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
              ]
          },
          {
              label: 'Settings',
              icon: 'pi pi-fw pi-briefcase',
              items: [
                  {
                      label: 'Profile',
                      icon: 'pi pi-fw pi-globe',
                      routerLink: ['/landing']
                  },
                  {
                      label: 'Logout',
                      icon: 'pi pi-fw pi-sign-in',
                      routerLink: ['/auth/login']
                  },
              ]
          },

      ];
  }
}

