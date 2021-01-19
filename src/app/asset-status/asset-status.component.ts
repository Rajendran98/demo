import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-asset-status',
  templateUrl: './asset-status.component.html',
  styleUrls: ['./asset-status.component.css']
})
export class AssetStatusComponent implements OnInit {
  selected = 'option2';
  products: any = [];

  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.httpClient.get("assets/faq.json").subscribe(data1 =>{
      console.log(data1);
      this.products = data1;
    })
  }

}
