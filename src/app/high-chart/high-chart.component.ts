import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'angular2-highcharts';

@Component({
  selector: 'app-high-chart',
  template:`
    <h1>
      {{title}}
      <chart [options]="options"></chart>
    </h1>
  `,
  styleUrls: ['./high-chart.component.css']
})
export class HighChartComponent implements OnInit {
  options: Object;

  title = 'high charts';
  constructor() {
    this.options = {
      title : { text : 'simple chart' },
      xAxis: {
            categories: ['2015', '2016', '2017']
        },
      series: [{
      name: 'Target 1',
      data: [80,100,120]
    },
    {
      name: 'Target 2',
      data: [10,90,200]
    },
    {
      name: 'Target 3',
      data: [10,50,300]
    },
    {
      name: 'Target 4',
      data: [50,100,200]
    },
    {
      name: 'Target 5',
      data: [100,90,200]
    }]
    };
   }

  ngOnInit() {
  }

}
