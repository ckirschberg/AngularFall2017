import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-beanie-list',
  templateUrl: './beanie-list.component.html',
  styleUrls: ['./beanie-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BeanieListComponent implements OnInit {

  // I'll change this later, just demonstrating routing
  // Homework: Move this dummy data, to a place where I can 
  // access it both in the BeanieListComponent and also
  // in the BeanieComponent.
  temp = [
    {myid: '1', color: 'Burgundy', size: 6, fabric: 'Cotton'},
    {myid: '2', color: 'Blue', size: 3, fabric: 'Wool'},
    {myid: '3', color: 'Yellow', size: 4, fabric: 'Diamond'},
  ];

  // Angular's DI - It will add the router object because I ask for it.
  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

  onBeanieClick(tempValue) {
    console.log(tempValue);
    this.router.navigate(['beanie/', tempValue.myid]);
  }

}
