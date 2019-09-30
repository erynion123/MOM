import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  questions:any = [
    {
      'q':'What is MOM Kitchen ?',
      'a':''
    },
    {
      'q':'How do i cancel my subscribtion ?',
      'a':''
    },
    {
      'q':'How does trial period works ?',
      'a':''
    },
    {
      'q':'Currently in which locations are you present ?',
      'a':''
    },
    {
      'q':'What if i am not in the city, can i use my credits later ?',
      'a':''
    },
    {
      'q':'What can i eat ?',
      'a':''
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
