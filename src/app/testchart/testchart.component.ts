import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ChartData, ChartOptions } from 'chart.js';
import { chartRawData, data } from '../models/chart-raw-data';
import { JsonpClientBackend } from '@angular/common/http';


@Component({
  selector: 'app-testchart',
  templateUrl: './testchart.component.html',
  styleUrls: ['./testchart.component.css']
})
export class TestchartComponent implements OnInit {

  constructor(public userService:UserService) { }

  ngOnInit(): void {
    this.userService.getRewardsForChartFromHeliumApi("username").subscribe( rawdata => {
      console.warn(rawdata);
      this.chartRawData = rawdata;
      console.warn(this.chartRawData);

      this.chartRawData.data?.forEach(element => {

        this.ldataList.push(element.total!);
        this.ldataLabels.push(element.timestamp!);

      });

      this.ldataSet.push({
        data:this.ldataList,
        label:"Mining rewards",
      })

      console.log(this.hotspotData);

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

  salesData: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      { label: 'Mobiles', data: [1000, 1200, 1050, 2000, 500], tension: 0.5 },
      { label: 'Laptop', data: [200, 100, 400, 50, 90], tension: 0.5 },
      { label: 'AC', data: [500, 400, 350, 450, 650], tension: 0.5 },
      { label: 'Headset', data: [1200, 1500, 1020, 1600, 900], tension: 0.5 },
    ],
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
}
