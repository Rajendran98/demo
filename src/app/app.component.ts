import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { Router } from '@angular/router';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [
    {name: 'Lemon'},
    {name: 'Lime'},
    {name: 'Apple'},
  ];

  constructor(
    private router: Router) {
     }

     element: HTMLElement;
     toggleActive(event:any){
      
      event.preventDefault();
      if(this.element !== undefined){
        this.element.style.backgroundColor = "white";
        this.element.style.color = "#666666";
      } 
      var target = event.currentTarget;
      target.style.backgroundColor = "#005F9E";
      target.style.color = "white"
      this.element = target;
    }

    dashboard(){
      this.router.navigate(['dashboard']);
      console.log('dashboard');
    }
    fleet(){
      this.router.navigate(['fleet']);
      console.log('fleet');
    }
    login(){
      this.router.navigate(['login']);
      console.log('login');
    }
    application(){
      this.router.navigate(['application']);
      console.log('application');
    }
    
    add(event: MatChipInputEvent): void {
      const input = event.input;
      const value = event.value;
  
      // Add our fruit
      if ((value || '').trim()) {
        this.fruits.push({name: value.trim()});
      }
  
      // Reset the input value
      if (input) {
        input.value = '';
      }
    }
  
    remove(fruit: Fruit): void {
      const index = this.fruits.indexOf(fruit);
  
      if (index >= 0) {
        this.fruits.splice(index, 1);
      }
    }
}
