import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  type:Boolean = true;
  selectedTab = 0;
  currentUrl: string;
  constructor(
    private router: Router,
  ) {
    this.currentUrl = this.router.url;
    this.setTabActive(this.currentUrl);
  }

  ngOnInit() {
  }

  goToMenu(){
    this.selectedTab = 1;
    this.router.navigate(['menu']);
  }

  goToSubs(){
    this.selectedTab = 0;
    this.router.navigate(['']);
  }

  setTabActive(url){
    if(url.includes('menu')){
      this.selectedTab = 1;
    }else if(url.includes('home')){
      this.selectedTab = 0;
    }
  }

}
