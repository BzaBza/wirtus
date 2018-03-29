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

  render () {
    return (
     <div className="d-flex align-items-center justify-content-between flex-wrap">
      <div className="col-6">
        <CircularProgressbar
         percentage={75}
         styles={{
           fontSize: "22em" ,
           path: { stroke: `rgba(33, 149, 242, ${75 / 100})` },
         }}
        />
      </div>
       <div className="gray statistics-pie-cart-info col-6">
         <div>
           <h4>1,250$</h4>
           <p>Channel Sales</p>
         </div>
       </div>
     </div>
    );
  }
}
export default MyCircularProgressbar;



