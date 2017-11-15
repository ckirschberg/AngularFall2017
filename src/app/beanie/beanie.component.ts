import { Beanie } from './../beanie';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-beanie',
  templateUrl: './beanie.component.html',
  styleUrls: ['./beanie.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BeanieComponent implements OnInit {
  model = new Beanie('Burgundy', 7, 'Cotton');
  
  constructor() { }

  ngOnInit() {
  }

}
