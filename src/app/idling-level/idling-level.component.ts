import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';
import * as d3 from 'd3';

@Component({
  selector: 'app-idling-level',
  templateUrl: './idling-level.component.html',
  styleUrls: ['./idling-level.component.css']
})
export class IdlingLevelComponent implements OnInit {
  selected = 'option2';
  public network = "ON";
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    var chart = c3.generate({
      bindto: '#chart2',
      
      padding:{
        top:20,
        right:15
    
        
      },
      size: {
        height: 300,
        
    },
    data: {
      columns: [
          
          ['data', 200,50,130,190]
      ],
      type: 'bar',
      colors: {
        data: '#EB5757'
      
      }
  },
  axis: {
    x: {
      type: 'category',
      categories: ['0-10%', '10-15%', '10-25%', '> 25%']
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
