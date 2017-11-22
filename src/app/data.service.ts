import { Injectable } from "@angular/core";
import { Beanie } from "./beanie";

@Injectable()
export class DataService {
  temp = [
    {id: '1', color: 'Burgundy', size: 6, fabric: 'Cotton'},
    {id: '2', color: 'Blue', size: 3, fabric: 'Wool'},
    {id: '3', color: 'Yellow', size: 4, fabric: 'Diamond'},
  ];

  public test(): void {
    alert("Hello from dataservice");
  }

  public getBeanie(id: string): Beanie {
    return this.temp.find(x => x.id === id);
  }

}