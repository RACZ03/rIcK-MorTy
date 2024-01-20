import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouteInfo } from '@app/core';
import { ROUTES } from './sidebar-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {

  public sidebarItems!: RouteInfo[];
  document: any = document;
  title: String = 'RiCk & mOrTy';
  subtitle: String = 'Characters';
  toggleLabel: String = 'Dark Mode';
  width!: number;
  hideSidebar: boolean = false;
  sidebar: any;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.sidebarItems = ROUTES.filter((sidebarItem) => sidebarItem);

    this.sidebar = this.document.getElementById('sidebar');
    if (this.sidebar) {
      if (this.sidebar.classList.contains('close')) {
        this.toggleLabel = 'Light Mode';
      } else {
        this.toggleLabel = 'Dark Mode';
      }
    }

    this.width = window.innerWidth;
    if (this.width < 768) {
      this.hideSidebar = true;
      this.toggleSidebar();
    }
  }

  toggleSidebar() {
    const sidebar = this.document.getElementById('sidebar');
    if (this.width > 768 && this.width < 992) {
      this.hideSidebar = false;
    }

    if (this.hideSidebar) {
      this.renderer.setStyle(sidebar, 'display', 'none');
      return
    }
    if (sidebar) {
      sidebar.classList.toggle('close');
    }
  }

  switchTheme() {
    this.document.body.classList.toggle('dark');
    this.toggleLabel = this.toggleLabel === 'Dark Mode' ? 'Light Mode' : 'Dark Mode';
    const navHeader = this.document.getElementById('nav-header');
    if (navHeader.classList.contains('bg-dark')) {
      this.renderer.removeClass(navHeader, 'navbar-dark');
      this.renderer.removeClass(navHeader, 'bg-dark');
      this.renderer.addClass(navHeader, 'navbar-light');
      this.renderer.addClass(navHeader, 'bg-light');
    } else {
      this.renderer.removeClass(navHeader, 'navbar-light');
      this.renderer.removeClass(navHeader, 'bg-light');
      this.renderer.addClass(navHeader, 'navbar-dark');
      this.renderer.addClass(navHeader, 'bg-dark');
    }
  }

  logout() {
  }

  ngDoCheck() {
    this.width = window.innerWidth;
    if (this.width < 768) {
      this.hideSidebar = true;
    } else {
      this.hideSidebar = false;
    }
    // console.log(this.width);
    if (this.width < 1199 && this.width > 902) {
      // this.sidebar.classList.toggle('close');
    }
  }
}
