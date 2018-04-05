import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2'

class SalesReport extends Component {

  render() {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };
    return (
     <div>
       <h2 className="text-white">Sales report</h2>
       <Bar
        data={data}
        width={100}
        height={this.props.chartCustomHeight}
       />
     </div>
    );
  }
}

export default SalesReport;
