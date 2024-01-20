import { Component } from '@angular/core';
import { ConfigService, InConfiguration } from '@app/core';

@Component({
  selector: 'app-main-layout',
  template: `
    <app-sidebar class="sidebar" id="sidebar"></app-sidebar>
    <div class="container-app">
      <app-header></app-header>
      <router-outlet></router-outlet>
    </div>

  `,
  styleUrls: [],
})
export class AppLayoutComponent {
  public config!: InConfiguration;
  constructor(
    private configService: ConfigService,
  ) {
    this.config = this.configService.configData;

  }

}
