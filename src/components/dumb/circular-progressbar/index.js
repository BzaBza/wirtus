import React, {Component} from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class MyCircularProgressbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {},
    };
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
     <div className="d-flex align-items-center text-center flex-wrap">
       <div className="col-lg-6">
         <CircularProgressbar
          percentage={75}
          styles={{
            path: {stroke: `rgba(33, 149, 242, ${75 / 100})`},
          }}
         />
       </div>
       <div className="col-lg-6 text-white progress-info justify-content-center d-flex flex-wrap">
         <h5 className="progress-info-count" >1 250</h5>
         <p className="progress-info-foo">VIEWS</p>
       </div>
     </div>
    );
  }
}

export default MyCircularProgressbar;



