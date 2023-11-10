import {NgModule} from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {BrowserModule, Title} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';


// Import routing module
import {AppRoutingModule} from './app-routing.module';

// Import app component
import {AppComponent} from './app.component';

// Import containers
import {DefaultFooterComponent, DefaultHeaderComponent, DefaultLayoutComponent,} from './containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
} from '@coreui/angular';

import {IconModule, IconSetService} from '@coreui/icons-angular';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {appReducers} from "./store/app.reducer";
import {AuthEffects} from "./account/store/auth.effects";
import {AuthInterceptor} from "./core/interceptors/auth.interceptor";
import {ErrorInterceptor} from "./core/interceptors/error.interceptor";
import {SpinnerComponent} from "./spinner/spinner.component";
import {LoaderInterceptor} from "./core/interceptors/loader.interceptor";


const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS, SpinnerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([AuthEffects])
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    }, // adds hashes to the URL
    IconSetService,
    Title
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
