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

  // Optional type system
  private onMySubmit(form) {
    console.log(this.model);
    console.log(form);

    // Check if form is valid.
    if (form.valid) {
      // Save data to the server
    }
    else {
      alert("Error, fix first");
    }


  }

}
