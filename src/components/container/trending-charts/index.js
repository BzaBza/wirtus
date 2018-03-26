import React, {Component} from 'react';
import LineChart from "../../dumb/line-chart/index";
import lineChartData from '../../../redux/config/line-trending-chartdata-data';


class TrendingCharts extends Component {

  render() {

    let lineChartConfig = {
      backgroundColor: '#294260',
      borderColor: '#2196f3',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
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
      data: lineChartData.data
    };
    return (
     <section className="col-12">
        <LineChart lineChartConfig={lineChartConfig}/>
     </section>
    );
  }
}

export default TrendingCharts;
