import { Injectable } from "@angular/core";
import { Beanie } from "./beanie";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class DataService {
  // temp = [
  //   {id: '1', color: 'Burgundy', size: 6, fabric: 'Cotton'} as Beanie,
  //   {id: '2', color: 'Blue', size: 3, fabric: 'Wool'} as Beanie,
  //   {id: '3', color: 'Yellow', size: 4, fabric: 'Diamond'} as Beanie,
  // ];
  localData: Beanie[] = [];

  // DI - Angular will inject an httpclient object.
  constructor(private http: HttpClient) { 
    
  }

  public test(): void {
    alert("Hello from dataservice");
  }

  public getAllWithPipe(): Observable<Beanie[]> {
    // pipe and map, taps into the result from the webservice and can change
    // the data before passing it back inside an observable to whoever called it.
    return this.http.get(
      'http://angular2api1.azurewebsites.net/api/internships/getall').pipe(
        map((response: any[]) => {
          this.localData = response.filter(x => x.customerId === '1');
          return this.localData;
        }));
  
  }

  public getAll(): Observable<Beanie[]> {
    return this.http.get(
      'http://angular2api1.azurewebsites.net/api/internships/getall') as Observable<Beanie[]>;
  }

  public getBeanie(id: string): Beanie {
    return this.localData.find(x => x._id === id);
  }

  // public createNewBeanie(): Beanie {
  //   return new Beanie('', undefined, '');
  // }
}