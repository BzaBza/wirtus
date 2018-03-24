import React, {Component} from 'react';
import Progress from 'react-progressbar';

class ProgressBar extends Component {
  render () {
    return (
       <Progress completed={75} />
    )
  }
}
export default ProgressBar;