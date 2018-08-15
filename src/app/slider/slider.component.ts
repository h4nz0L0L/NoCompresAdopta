import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  images: Array<string> = [
    'assets/506.jpg',
    'assets/501.jpg',
    'assets/507.jpg'
  ];

  
  constructor() { }

  ngOnInit() {
  }

}