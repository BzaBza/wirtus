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
      lineChartConfig: this.props.lineChartConfig
    })
  }

  render() {
    return (
     <div className="chart col-12">
       <div>
         <Line
          data={this.state.lineChartConfig}
          height={600}
          width={1700}
          options={{
            legend: false,
            scales: {
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
       </div>
     </div>
    );
  }
}

export default LineChart;
