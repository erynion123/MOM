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
    SharedModule
  ],
  providers: [
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
