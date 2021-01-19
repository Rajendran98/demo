import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export class User{
  constructor(
    public name:string,
    public email:string
  ){}
}

/*const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];*/

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.css']
})
export class FleetComponent implements OnInit {
  selected = 'option2';
  displayedColumns: string[] = ['select','icon','asset', 'position', 'name', 'weight', 'symbol','runtime_target','runtime','runtime_fuel','runtime_burn'];
  //dataSource = ELEMENT_DATA;
  dataSource 
   users: object = [];
  private baseURL = "http://localhost:8080/getUsers"
  
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getValues();
  }

  getValues(){
    this.httpClient.get<any>('http://localhost:8080/getUsers').subscribe((data) => {
    
      this.users = data;
      console.log(this.users);
      this.dataSource =  this.users;
    });

/*    this.httpClient.get('http://localhost:8080/getUsers').subscribe((data) => {
      console.log(data);
  
     
    });*/
  }

}
