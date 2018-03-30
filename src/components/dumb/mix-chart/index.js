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
    let chartCustomHeight;
    if (window.screen.width <= 1500){
      chartCustomHeight = 400
    }else{
      chartCustomHeight = 700
    }
    return (
     <Bar
      data={this.state.lineChartConfig}
      height={chartCustomHeight}
      width={2000}
      options={this.state.option}
     />
    );
  }
}

export default MixChart;
