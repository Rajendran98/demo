import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import * as c3 from 'c3';
import * as d3 from 'd3';

@Component({
  selector: 'app-fuel-level',
  templateUrl: './fuel-level.component.html',
  styleUrls: ['./fuel-level.component.css']
})
export class FuelLevelComponent implements OnInit {
  selected = 'option2';

  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    var chart = c3.generate({
      bindto: '#chart1',
      
      padding:{
        top:20,
        right:15
    
        
      },
      size: {
        height: 250,
        
    },
    data: {
      columns: [
          
          ['data', 50,100,150,200]
      ],
      type: 'bar',
    /*  colors: {
        data: function(d) {
          //return (d.value >= 45) ? '#00ff00': '#ff0000';
          if(d[0]){
            return '#EB5757'
          }

          if(d[1]){
            return '#EB5757'
          }
      }
      }*/
  },
  axis: {
    x: {
      type: 'category',
      categories: ['< 25%', '< 50%', '< 75%', '< 100%']
  },
  y: {
    tick: {
      values: [0, 50, 100, 150, 200]
    }
  }
},
  bar: {
      width: {
          ratio: 0.4 // this makes bar width 50% of length between ticks
      }
      // or
      //width: 100 // this makes bar width 100px
  }
  });

  }

}
