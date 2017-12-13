import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ChartModule } from 'angular2-highcharts';

import { AppComponent } from './app.component';
import { HighChartComponent } from './high-chart/high-chart.component';



@NgModule({
  declarations: [
    AppComponent,
    HighChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartModule.forRoot(require('highcharts/highstock'),
        require('highcharts/modules/exporting'))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
