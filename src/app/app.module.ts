import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from '@theme/app-layout/app-layout.component';
import { HeaderComponent } from '@theme/header/header.component';
import { SidebarComponent } from '@theme/sidebar/sidebar.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS, ItemsEffects } from '@app/state';
import { EffectsModule } from '@ngrx/effects';
import { CustomHttpInterceptor } from './core/interceptor/custom-http.interceptor';
import { ToastrModule } from 'ngx-toastr';

const COMPONENTS = [
  AppComponent,
  AppLayoutComponent,
  HeaderComponent,
  SidebarComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    // StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
    StoreDevtoolsModule.instrument({ name: 'Test'}),
    EffectsModule.forRoot([ItemsEffects]),
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
