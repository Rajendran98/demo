import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selected = 'option2';
  public network = "ON";
 /* products: any = [  
    {"name":"Shyam", "email":"shyamjaiswal@gmail.com"},  
    {"name":"Bob", "email":"bob32@gmail.com"},  
    {"name":"Jai", "email":"jai87@gmail.com"}  
];*/

  constructor() { }

  ngOnInit(): void {
   // console.log(this.products);
  }

}
