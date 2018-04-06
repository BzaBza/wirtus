import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import {connect} from "react-redux";
import DropdownSideBtn from "../../dumb/dropdown-side-btn";
import chartData from '../../../redux/config/sales-report-chartdata-data'
import chartOptions from '../../../redux/config/sales-report-charts-options'

class SalesReport extends Component {
  constructor(props) {
    super(props);
    this.filterPeriodData = this.filterPeriodData.bind(this);
  }


  filterPeriodData(currentPeriod) {
    this.props.onFilterPeriod(currentPeriod)
  }

  render() {
    const options = chartOptions;
    const data = {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      datasets: [
        {
          backgroundColor: '#505464',
          borderWidth: 1,
          hoverBackgroundColor: '#2196f3',
          data: chartData
        }
      ]
    };
    return (
     <div className="sales-report-chart">
       <div className="d-flex sales-report-header">
         <h2 className="text-white sales-report-title">Sales report</h2>
         <div className="d-flex align-items-center">
           <span className="container text-white sales-report-btn-description">Show: </span>
           <DropdownSideBtn text={'gray'} filterData={this.filterPeriodData} currentData='Week' data={['Week', 'Month']}/>
         </div>
       </div>
       <Bar
        data={data}
        width={100}
        height={this.props.chartCustomHeight}
        options={options}
       />
     </div>
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
 }))(SalesReport);
