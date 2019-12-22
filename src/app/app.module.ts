import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule} from '@angular/forms';
import { HomeModule } from './home/home.module';
import { DataService } from './shared/services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { IntroComponent } from './intro/intro.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SharedModule } from './shared/shared.module';
import { AngularTokenModule } from 'angular-token';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("460667822792-guht50p6751edt9bcmp5mhb7cqj3d2eh.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("659619851233129")
  }
]);

export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularTokenModule.forRoot({
      // Change to your local dev environment example: 'http://localhost:3000'
      apiBase: 'https://cuddly-meal.herokuapp.com',
    }),
    FormsModule,
    HomeModule,
    CarouselModule.forRoot(),
    HttpClientModule,
    SharedModule,
    SocialLoginModule,
    BrowserAnimationsModule
  ],
  providers: [
    DataService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
