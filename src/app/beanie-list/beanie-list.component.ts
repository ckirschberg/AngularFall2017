import { HttpClient } from '@angular/common/http';
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

  public temp: any[];

  // Angular's DI - It will add the router object because I ask for it.
  constructor(private router: Router, private data: DataService
    ,private http: HttpClient) { 

    // this.temp = this.data.getAll();
  }

  ngOnInit() {
    this.http.get(
      'http://angular2api1.azurewebsites.net/api/internships/getall')
      .subscribe((data: any[]) => {
        // Run code when data comes back from the web service.
        this.temp = data.filter(x => x.customerId === '1');
        // ...This code..
        console.log("2");
      });
      // This code will run before...
      console.log("1");
  }

  onBeanieClick(beanie) {
    // console.log(this.data.temp);
    console.log(beanie);
    this.router.navigate(['beanie/', beanie.id]);
  }

}
