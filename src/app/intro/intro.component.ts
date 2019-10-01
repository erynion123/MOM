import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html'
})
export class IntroComponent implements OnInit {
  menus:any = [
    {
      "name" : "8 Hrs Pulled Chicken Burger",
      "sides": ['Waffers','Barbeque Sauce'],
      "price": "165",
      "img":"assets/intro/pulled-pork-burger.png"
    },
    {
      "name" : "Trail of Burger",
      "items": ["Texas Fried Chicken with alabama sauce","8 Hrs Pulled Chicken Burger","Aroma of sauce asian chicken"],
      "sides": ['Waffers','Salad'],
      "price": "190",
      "img":"assets/intro/trail-of-burger.psd"
    },
    {
      "name" : "Arrabiata Meatball Pasta",
      "sides": ['Garlic Bread'],
      "price": "150",
      "img":"assets/intro/meatball.jpeg"
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}
