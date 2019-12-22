import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  menus: any;
  type:any;
  constructor(
    private dataService: DataService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getMenu();
  }


  getMenu(){
    var url = "/v1/menus?meal_hour=lunch";
    this.dataService.get(url).subscribe((data:any) => {
      console.log(data);
      this.menus = data;
    });
  }

  checkout(){
    this.router.navigate(['checkout']);
  }

}
