import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2'

class SalesReport extends Component {

  render() {
    const options = {
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },
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
        xAxes: [{
          categoryPercentage: 0.7,
          display: true,
          gridLines: {
            color: '#505464',
            display: false
          },
          label: {
            color: '#969aab'
          }
        }
        ],

        yAxes: [
          {
            categoryPercentage: 1,
            barPercentage: 1,
            stacked: true,
            type: 'linear',
            display: true,
            position: 'left',
            id: 'y-axis-1',
            gridLines: {
              display: true,
              color: '#505464',
              drawBorder: false
            },
            scaleLabel: {
              display: false
            },
            ticks: {
              beginAtZero: true,
              display: false,
            },
            labels: {
              show: false
            }
          },
        ]
      },
    };
    const data = {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      datasets: [
        {
          backgroundColor: '#505464',
          borderWidth: 1,
          hoverBackgroundColor: '#2196f3',
          data: [65, 59, 80, 81, 56, 55, 40, 33, 44, 22, 44, 22]
        }
      ]
    };
    return (
     <div className="sales-report-chart">
       <h2 className="text-white">Sales report</h2>
       <Bar
        data={data}
        width={100}
        height={41}
        options={options}
       />
     </div>
    );
  }
}

export default SalesReport;
