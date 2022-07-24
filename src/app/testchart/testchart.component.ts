import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ChartData, ChartOptions } from 'chart.js';
import { chartRawData, data } from '../models/chart-raw-data';
import { JsonpClientBackend } from '@angular/common/http';
import { DatePipe, formatDate } from '@angular/common';
import { DateAdapter } from '@angular/material/core';
import { NgChartsModule } from 'ng2-charts';


@Component({
  selector: 'app-testchart',
  templateUrl: './testchart.component.html',
  styleUrls: ['./testchart.component.css']
})
export class TestchartComponent implements OnInit {

  constructor(public userService:UserService) { }

  @Input()
  hotspotAddress?:string;

  @Input()
  hotspotDateMin?:string;

  ngOnInit(): void {
    
    this.userService.getRewardsForChartFromHeliumApi(this.hotspotAddress!, formatDate(this.hotspotDateMin!,'yyyy-MM-dd','en-US'), formatDate(Date.now(),'yyyy-MM-dd','en-US') ).subscribe( rawdata => {
      this.chartRawData = rawdata;
      this.chartRawData.data?.reverse().forEach(element => {
        this.ldataList.push(element.total!);
        this.ldataLabels.push(formatDate(element.timestamp!,'dd/MM/yyyy','en-US',));
      });

      this.ldataSet.push({
        data:this.ldataList,
        label:"Mining rewards",
        backgroundColor: 'rgba(148,159,177,0.5)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      })
      

    });
  }
  
  chartRawData?:chartRawData;
  ldataList: string[] = [];
  ldataLabels: string[] = [];
  ldataSet: any = [];

  hotspotData: ChartData<'line'> = {
    labels: this.ldataLabels,
    datasets: this.ldataSet,
  };

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Mining rewards',
      },
    },
  };

  public chartColors: Array<any> = [
    { // first color
      backgroundColor: 'rgba(225,10,24,0.2)',
      borderColor: 'rgba(225,10,24,0.2)',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    },
    { // second color
      backgroundColor: 'rgba(225,10,24,0.2)',
      borderColor: 'rgba(225,10,24,0.2)',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    }];

}
