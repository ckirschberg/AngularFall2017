import { DataService } from './../data.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-beanie-list',
  templateUrl: './beanie-list.component.html',
  styleUrls: ['./beanie-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BeanieListComponent implements OnInit {

  public temp;

  // Angular's DI - It will add the router object because I ask for it.
  constructor(private router: Router, private data: DataService) { 
    this.temp = this.data.temp;
  }

  ngOnInit() {
  }

  onBeanieClick(beanie) {
    // console.log(this.data.temp);
    console.log(beanie);
    this.router.navigate(['beanie/', beanie.id]);
  }

}
