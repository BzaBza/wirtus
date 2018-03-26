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
    this.setState({
      chartData: this.props.chartData,
    });
  }

  componentWillMount() {
    this.getChartData();
  }

  render () {
    return (
     <CircularProgressbar
      percentage={75}
      styles={{
        path: { stroke: `rgba(33, 149, 242, ${75 / 100})` },
      }}
     />
    );
  }
}
export default MyCircularProgressbar;



