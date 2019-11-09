import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule} from "@angular/forms";
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { PriceComponent } from './price/price.component';
import { TeamComponent } from './team/team.component';
import { SubsComponent } from './subs/subs.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccountComponent } from './account/account.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    MenuComponent,
    PriceComponent,
    TeamComponent,
    SubsComponent,
    AccountComponent
  ],
  imports: [
    HomeRoutingModule,
    FormsModule,
    CommonModule,
    CarouselModule.forRoot(),
    TabsModule.forRoot(),
    SharedModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
