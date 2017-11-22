import { DataService } from './../data.service';
import { Beanie } from './../beanie';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-beanie',
  templateUrl: './beanie.component.html',
  styleUrls: ['./beanie.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BeanieComponent implements OnInit {
  // model = new Beanie('Burgundy', 7, 'Cotton');
  private beanie: Beanie;
  
  constructor(private route: ActivatedRoute, private data: DataService) {
    route.params.subscribe(params => {
      let id = params['id'];
      console.log(id);
      
      // Class exercise:
      // Access the dataservice object and retrieve the beanie object
      // based on the id.
      // Success 1: Get access to dataservice object here.
      // Success 2: Print out the object with the id from the url.

      // We have the id and the array of beanies
      // Here we specify the type Beanie to the local variable beanie.

      this.beanie = this.data.getBeanie(id);

      // Populate the view with the data in the returned beanie object.

    });


  }

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
