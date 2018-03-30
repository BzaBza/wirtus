import React, {Component} from 'react';
import {connect} from "react-redux";

import DropdownSideBtn from "../../dumb/dropdown-side-btn";
import MixChart from "../../dumb/mix-chart/index";
import mixChartData from '../../../redux/config/mix-trending-chartdata-data';
import MyCircularProgressbar from "../../dumb/circular-progressbar";


class TrendingCharts extends Component {
  constructor(props) {
    super(props);
    this.filterPeriodData = this.filterPeriodData.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }


  handleScroll() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    let header = document.querySelector('.trending-charts-header').style;
    if (scrolled >= 400) {
      header.position = 'inherit';
    } else {
      header.position = 'fixed';
    }
  };

  filterPeriodData(currentPeriod) {
    this.props.onFilterPeriod(currentPeriod)
  }

  render() {
    console.log(this.props.filter);
    const options = {
      maintainAspectRatio: false,
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
            showBorder: false,
            gridLines: {
              color: '#3d404f',
              showBorder: false,
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
            display: false,
            position: 'top',
            showBorder: false,
            gridLines: {
              display: false,
            },
            scaleLabel: {
              display: false
            },
            ticks: {
              beginAtZero: true,
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
              beginAtZero: true,
              display: false,
              max: 120
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
        pointHoverBorderWidth: 4,
        pointRadius: 1,
        pointHitRadius: 1,
      }, {
        type: 'bar',
        fill: false,
      }],
    };
    return (
     <section className="trending-charts">
       <div className="trending-charts-header">
         <div className="circular-progress-bars-container d-flex justify-content-between align-items-center">
           <div className="d-flex  my-circular-container">
             <div className="d-flex align-items-center">
               <MyCircularProgressbar/>
             </div>
             <div className="d-flex  align-items-center">
               <MyCircularProgressbar/>
             </div>
             <div className="d-flex align-items-center">
               <MyCircularProgressbar/>
             </div>
           </div>
           <div>
             <DropdownSideBtn filterData={this.filterPeriodData} currentData='Week' data={['Week', 'Month']}/>
           </div>
           </div>
       </div>
       <div className="trending-charts-footer">
         <MixChart lineChartConfig={lineChartConfig} options={options}/>
       </div>
     </section>
    );
  }
}
export default connect(
 state => ({
   filter: state.periodFilter
 }),
 dispatch => ({
   onFilterPeriod: (currentPeriod) => {
     dispatch({type: 'FILTER_PERIOD_DATA', payload: currentPeriod});
   }
 }))(TrendingCharts);
