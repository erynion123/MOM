import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  menus: any;

  constructor(private dataService: DataService) { }

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

}
