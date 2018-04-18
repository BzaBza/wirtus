import React, {Component} from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class MyCircularProgressbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {},
    };
    this.getChartData = this.getChartData.bind(this);
  }

  getChartData() {
    this.setState((initialState, props) => (
     {
       chartData: props.chartData
     }
    ));
  }

  componentWillMount() {
    this.getChartData();
  }

  render() {
    return (
     <div className="d-flex align-items-center flex-wrap justify-content-center">
       <div className="circular-container">
         <CircularProgressbar
          percentage={this.props.circularProgressData.value / 100}
          styles={{
            path: {stroke: `rgba(33, 149, 242, ${this.props.circularProgressData.value / 100})`},
          }}
         />
       </div>
       <div className="text-white progress-info justify-content-center d-flex flex-wrap">
         <h5 className="progress-info-count" >{this.props.circularProgressData.value}</h5>
         <p className="progress-info-foo">{this.props.circularProgressData.description}</p>
       </div>
     </div>
    );
  }
}

export default MyCircularProgressbar;



