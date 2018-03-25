import React, {Component} from 'react';
import LineChart from "../../dumb/line-chart/index";
import lineChartConfig from '../../../redux/config/line-trending-chartdata-config';


class TrendingCharts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        email: '',
        username: '',
        password: '',
        phone: '',
      },
      isSubmit: false,
    };
  }

  render() {
    return (
     <section className="col-12">
        <LineChart lineChartConfig={lineChartConfig}/>
     </section>
    );
  }
}

export default TrendingCharts;
