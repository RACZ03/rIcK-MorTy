import {
  Component,
  ElementRef,
  Renderer2,
  AfterViewInit,
  Host,
  HostListener,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit, OnInit {
  showButton: boolean = true;
  document: any = document;
  sidebar: any;
  display: any;


  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    // this.sidebar = this.document.getElementById('sidebar');
    // const width = window.innerWidth;
    // if (width < 768) {
    //   this.renderer.setStyle(this.sidebar, 'display', 'none');
    // }
  }

  ngOnInit(): void {
    this.showButtonToggle(window.innerWidth);
  }

  toggleSidebarVisibility() {

    this.sidebar = this.document.getElementById('sidebar');
    this.display = this.sidebar.style.display;

    if (this.display === 'none') {
      this.renderer.setStyle(this.sidebar, 'display', 'block');
    } else {
      this.renderer.setStyle(this.sidebar, 'display', 'none');
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.showButtonToggle(window.innerWidth);
  }

  showButtonToggle(width: number) {
    if (width < 992 && width > 767) {
      this.showButton = false
    } else if (width < 767) {
      this.showButton = true;
    }
  }
  
}
