import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { create } from 'domain';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  constructor() { }

  ngOnInit() {
    const barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: 'blue',
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    this.createMixBarLineChart();
    this.create2LineChart();

  }

  createMixBarLineChart() {
    const mixBarLine = new Chart('mixBarLine', {
      type: 'bar',
      data: {
          datasets: [{
              label: 'Bar Dataset',
              data: [10, 20, 30, 40],
              // this dataset is drawn below
              backgroundColor: 'blue',
              order: 2
          }, {
              label: 'Line Dataset',
              data: [10, 30, 20, 40],
              type: 'line',
              // this dataset is drawn on top
              borderColor: 'red',
              order: 1
          }],
          labels: ['January', 'February', 'March', 'April']
      },
      options: this.options
  });
  }

  create2LineChart() {
    const mixBarLine = new Chart('mix2Line', {
      type: 'line',
      data: {
          datasets: [{
              label: 'Bar Dataset',
              data: [5, 40, 20, 34],
              // this dataset is drawn below
              borderColor: 'blue',
              order: 2
          }, {
              label: 'Line Dataset',
              data: [10, 30, 20, 40],
              // this dataset is drawn on top
              borderColor: 'red',
              order: 1
          }],
          labels: ['January', 'February', 'March', 'April']
      },
      options: this.options
  });
  }
}
