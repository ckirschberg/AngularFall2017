import { Injectable } from "@angular/core";
import { Beanie } from "./beanie";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataService {
  // temp = [
  //   {id: '1', color: 'Burgundy', size: 6, fabric: 'Cotton'} as Beanie,
  //   {id: '2', color: 'Blue', size: 3, fabric: 'Wool'} as Beanie,
  //   {id: '3', color: 'Yellow', size: 4, fabric: 'Diamond'} as Beanie,
  // ];

  // DI - Angular will inject an httpclient object.
  constructor(private http: HttpClient) { }

  public test(): void {
    alert("Hello from dataservice");
  }

  public getAll() {
    this.http.get(
      'http://angular2api1.azurewebsites.net/api/internships/getall')
      .subscribe(data => {
        // Run code when data comes back from the web service.

        // ...This code..
        console.log("2");

        // Return the data back to the component using observables.
        return data;
      });
      // This code will run before...
      console.log("1");
  }

  public getBeanie(id: string): Beanie {
    return undefined; //this.temp.find(x => x.id === id);
  }

  // public createNewBeanie(): Beanie {
  //   return new Beanie('', undefined, '');
  // }
}