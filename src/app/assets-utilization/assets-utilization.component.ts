import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';
import * as d3 from 'd3';

@Component({
  selector: 'app-assets-utilization',
  templateUrl: './assets-utilization.component.html',
  styleUrls: ['./assets-utilization.component.css']
})
export class AssetsUtilizationComponent implements OnInit {
  selected = 'option2';
  public network = "ON";
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {




    var chart = c3.generate({
      
      bindto: '#chart3',
      
      padding:{
        top:5,
    
        
      },
      size: {
        height: 180,
      
    },
      data: {
        columns: [
            ['WORKING', 80, 20, 50],
            ['IDEL', 20, 130, 90],
            ['RUNNING', 50, 200, 160]
        ],
        type: 'bar',
        colors: {
          WORKING:'#48C581',
          IDEL:'#666666',
          RUNNING: '#005F9E'
        },
        
      /*  color: function (color, d) {background: #48C581;666666, 100%005F9E, 100%

            // d will be 'id' when called for legends
            return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
        }*/
    },
    bar: {
      space: 0.25
  },
    axis: {
      x: {
        show: false
    },
    y: {
      show: false
    }
  }
  
  });

  }


}
