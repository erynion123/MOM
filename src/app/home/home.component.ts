import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  type:Boolean = true;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  goToMenu(){
    this.router.navigate(['menu']);
  }

  goToSubs(){
    this.router.navigate(['']);
  }

}
