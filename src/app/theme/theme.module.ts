import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
})
export class ThemeModule { }
