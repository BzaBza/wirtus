import React, {Component} from 'react';
import MixChart from "../../dumb/mix-chart/index";
import mixChartData from '../../../redux/config/mix-trending-chartdata-data';


class TrendingCharts extends Component {

  render() {

    const options = {
      legend: false,
      responsive: true,
      tooltips: {
        mode: 'label'
      },
      elements: {
        line: {
          fill: true,
        }
      },
      scales: {
        xAxes: [
          {
            id: 'x-axis-1',
            display: true,
            position: 'bottom',
            showBorder:false,
            gridLines: {
              showBorder:false,
              display: true
            },
            ticks: {
              beginAtZero: false,
              min: 0,
              padding: -40,
            },
          },
          {
            id: 'x-axis-2',
            display: true,
            position: 'top',
            showBorder:false,
            gridLines: {
              display: false,
            },
            scaleLabel: {
              display: false
            },
            ticks: {
              beginAtZero:true,
              display: false
            },
          }
        ],

        yAxes: [
          {
            stacked: true,
            type: 'linear',
            display: true,
            position: 'left',
            id: 'y-axis-1',
            gridLines: {
              display: false,
            },
            scaleLabel: {
              display: false
            },
            ticks: {
              beginAtZero:true,
              display: false
            },
            labels: {
              show: false
            }
          },
        ]
      },
    };


    let lineChartConfig = {
      labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
      datasets: [{
        xAxisID: 'x-axis-2',
        type: 'line',
        data: mixChartData.data,
        fill: true,
        borderColor: '#2196f3',
        backgroundColor: 'rgba(41, 66, 97, 0.5)',
        borderJoinStyle: 'miter',
        pointBorderColor: '#ffffff',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#ffffff',
        pointHoverBorderColor: '#256faf',
        pointHoverBorderWidth: 3,
        pointRadius: 1,
        pointHitRadius: 1,
      }, {
        type: 'bar',
        fill: false,
      }],
    };
    return (
     <section className="col-12">
       <MixChart lineChartConfig={lineChartConfig} options={options}/>
     </section>
    );
  }
}

export default TrendingCharts;
