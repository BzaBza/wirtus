import React, {Component} from 'react';
import {connect} from "react-redux";

import DropdownSideBtn from "../../dumb/dropdown-side-btn";
import MixChart from "../../dumb/mix-chart/index";
import mixChartData from '../../../redux/config/mix-trending-chartdata-data';
import MyCircularProgressbar from "../../dumb/circular-progressbar";
import options from '../../../redux/config/mix-trending-charts-options';
import circularData from '../../../redux/config/trending-progress-data'


class TrendingCharts extends Component {
  constructor(props) {
    super(props);
    this.filterPeriodData = this.filterPeriodData.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }


  filterPeriodData(currentPeriod) {
    this.props.onFilterPeriod(currentPeriod)
  }

  render() {

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
               <MyCircularProgressbar circularProgressData={circularData.progressOne}/>
             </div>
             <div className="d-flex  align-items-center">
               <MyCircularProgressbar circularProgressData={circularData.progressTwo}/>
             </div>
             <div className="d-flex align-items-center">
               <MyCircularProgressbar circularProgressData={circularData.progressThree}/>
             </div>
           </div>
           <div className="d-flex align-items-center justify-content-between trending-filter-drop">
             <div className="container gray">Show: </div>
             <DropdownSideBtn text={'gray'} filterData={this.filterPeriodData} currentData='Week' data={['Week', 'Month']}/>
           </div>
         </div>
       </div>
       <div className="trending-charts-footer">
         <MixChart lineChartConfig={lineChartConfig} options={options} chartCustomHeight={this.props.chartCustomHeight}/>
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
