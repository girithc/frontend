import { Component, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HomeService } from './service/home.service';
import { filter, Subscription } from 'rxjs';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { TopbarComponent } from './components/layout/topbar/topbar.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {

  overlayMenuOpenSubscription: Subscription;

  menuOutsideClickListener: any;

  profileMenuOutsideClickListener: any;

  @ViewChild(SidebarComponent) appSidebar!: SidebarComponent;

  @ViewChild(TopbarComponent) appTopbar!: TopbarComponent;

  constructor(public homeService: HomeService, public renderer: Renderer2, public router: Router) {
      this.overlayMenuOpenSubscription = this.homeService.overlayOpen$.subscribe(() => {
          if (!this.menuOutsideClickListener) {
              this.menuOutsideClickListener = this.renderer.listen('document', 'click', event => {
                  const isOutsideClicked = !(this.appSidebar.el.nativeElement.isSameNode(event.target) || this.appSidebar.el.nativeElement.contains(event.target) 
                      || this.appTopbar.menuButton.nativeElement.isSameNode(event.target) || this.appTopbar.menuButton.nativeElement.contains(event.target));
                  
                  if (isOutsideClicked) {
                      this.hideMenu();
                  }
              });
          }

          if (!this.profileMenuOutsideClickListener) {
              this.profileMenuOutsideClickListener = this.renderer.listen('document', 'click', event => {
                  const isOutsideClicked = !(this.appTopbar.menu.nativeElement.isSameNode(event.target) || this.appTopbar.menu.nativeElement.contains(event.target)
                      || this.appTopbar.topbarMenuButton.nativeElement.isSameNode(event.target) || this.appTopbar.topbarMenuButton.nativeElement.contains(event.target));

                  if (isOutsideClicked) {
                      this.hideProfileMenu();
                  }
              });
          }

          if (this.homeService.state.staticMenuMobileActive) {
              this.blockBodyScroll();
          }
      });

      this.router.events.pipe(filter(event => event instanceof NavigationEnd))
          .subscribe(() => {
              this.hideMenu();
              this.hideProfileMenu();
          });
  }

  hideMenu() {
      this.homeService.state.overlayMenuActive = false;
      this.homeService.state.staticMenuMobileActive = false;
      this.homeService.state.menuHoverActive = false;
      if (this.menuOutsideClickListener) {
          this.menuOutsideClickListener();
          this.menuOutsideClickListener = null;
      }
      this.unblockBodyScroll();
  }

  hideProfileMenu() {
      this.homeService.state.profileSidebarVisible = false;
      if (this.profileMenuOutsideClickListener) {
          this.profileMenuOutsideClickListener();
          this.profileMenuOutsideClickListener = null;
      }
  }

  blockBodyScroll(): void {
      if (document.body.classList) {
          document.body.classList.add('blocked-scroll');
      }
      else {
          document.body.className += ' blocked-scroll';
      }
  }

  unblockBodyScroll(): void {
      if (document.body.classList) {
          document.body.classList.remove('blocked-scroll');
      }
      else {
          document.body.className = document.body.className.replace(new RegExp('(^|\\b)' +
              'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
  }

  get containerClass() {
      return {
          'layout-theme-light': this.homeService.config.colorScheme === 'light',
          'layout-theme-dark': this.homeService.config.colorScheme === 'dark',
          'layout-overlay': this.homeService.config.menuMode === 'overlay',
          'layout-static': this.homeService.config.menuMode === 'static',
          'layout-static-inactive': this.homeService.state.staticMenuDesktopInactive && this.homeService.config.menuMode === 'static',
          'layout-overlay-active': this.homeService.state.overlayMenuActive,
          'layout-mobile-active': this.homeService.state.staticMenuMobileActive,
          'p-input-filled': this.homeService.config.inputStyle === 'filled',
          'p-ripple-disabled': !this.homeService.config.ripple
      }
  }

  ngOnDestroy() {
      if (this.overlayMenuOpenSubscription) {
          this.overlayMenuOpenSubscription.unsubscribe();
      }

      if (this.menuOutsideClickListener) {
          this.menuOutsideClickListener();
      }
  }
}

