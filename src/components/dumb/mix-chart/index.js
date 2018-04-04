import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class MixChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineChartConfig: {},
      option: {},
    };
  }

  componentWillMount() {
    this.setState({
      lineChartConfig: this.props.lineChartConfig,
      option: this.props.options,
    });
  }

  render() {

    return (
     <Bar
      data={this.state.lineChartConfig}
      height={this.props.chartCustomHeight}
      width={2000}
      options={this.state.option}
     />
    );
  }
}

export default MixChart;
