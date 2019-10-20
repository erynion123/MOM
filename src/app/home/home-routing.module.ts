import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { SubsComponent } from './subs/subs.component';
import { MenuComponent } from './menu/menu.component';
import { TeamComponent } from './team/team.component';
import { PriceComponent } from './price/price.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      {
        path: '',
        component: SubsComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'menu',
        component: MenuComponent
      },
      {
        path: 'team',
        component: TeamComponent
      },
      {
        path: 'price',
        component: PriceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
