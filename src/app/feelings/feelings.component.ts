import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';
import * as d3 from 'd3';

@Component({
  selector: 'app-feelings',
  templateUrl: './feelings.component.html',
  styleUrls: ['./feelings.component.css']
})
export class FeelingsComponent implements OnInit {
  selected = 'option2';
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    var chart = c3.generate({
      bindto: '#chart',
      
      padding:{
        top:5,
    
        
      },
      size: {
        height: 300
    },
      data: {
        columns: [
            ['data1', 30, 200, 100, 300, 150, 250],
           
        ],
        regions: {
            'data1': [{'start':1, 'end':2, 'style':'dashed'},{'start':3}], // currently 'dashed' style only

        }
    },
    axis: {
      x: {
        show: false
    }
  }
  });

  }


}
