import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';
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
                  { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
              ]
          },
          {
              label: 'My Colleges',
              items: [
                  { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                  { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                  { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
              ]
          },
          {
              label: 'Pre-Application',
              items: [
                  { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks'], badge: 'NEW' },
                  { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank' },
              ]
          },
          {
              label: 'Application',
              items: [
                  { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['/utilities/icons'] },
                  { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
              ]
          },
          {
              label: 'Settings',
              icon: 'pi pi-fw pi-briefcase',
              items: [
                  {
                      label: 'Landing',
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

