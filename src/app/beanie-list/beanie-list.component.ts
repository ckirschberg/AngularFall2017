import { HttpClient } from '@angular/common/http';
import { DataService } from './../data.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";
import { Beanie } from "../beanie";

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
    // this.temp = this.data.localData;
    console.log("in component", this.temp);
  }

  ngOnInit() {

    // this.data.getAll().subscribe(data => {
    //   console.log("data here", data);
    // });
    

    this.data.getAllWithPipe()
      .subscribe((data: any[]) => {
        // Run code when data comes back from the web service.
        console.log(data);

        this.temp = data;
        // ...This code..
        console.log("2");
      });
      // This code will run before...
      console.log("1");
  }

  public onBeanieDelete(event, beanie: Beanie): void {
    // console.log(event);
    event.stopPropagation();
    // console.log("onDelete");

    // Before server response

    this.http.post('http://angular2api1.azurewebsites.net/api/internships/delete/' + beanie._id,
      beanie, { responseType: 'text'} ).subscribe(data => {
        // After a server response
        this.temp = this.temp.filter(x => x._id !== beanie._id);
      });

      // Before server response
  }

  onBeanieClick(beanie: Beanie) {
    // console.log("onClick");
    // console.log(this.data.temp);
    // console.log(beanie);
    this.router.navigate(['beanie/', beanie._id]);
  }

}
