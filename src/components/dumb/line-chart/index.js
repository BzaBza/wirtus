import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineChartConfig: {}
    };
  }
  componentWillMount(){

    this.setState({
      lineChartConfig: {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN', ''],
        datasets: [
          this.props.lineChartConfig
        ]
      }

    })
  }

  render() {
    return (
         <Line
          data={this.state.lineChartConfig}
          height={600}
          width={1700}
          options={{
            legend: false,
            scales: {
              xAxes: [{
                gridLines: {
                  color: "#3e4050"
                },
              }],
              yAxes: [{
                gridLines: {
                  display: false,
                },
                scaleLabel:{
                  display: false
                },
                ticks:{
                  display: false
                }
              }]
            }
          }}
         />
    );
  }
}

export default LineChart;
