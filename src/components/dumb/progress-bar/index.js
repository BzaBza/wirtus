import React, {Component} from 'react';
import Progress from 'react-progressbar';

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressData: this.props.progressData
    };
  }

  componentWillMount(){
    this.setState({
      progressData: this.props.progressData
    })
  }

  componentWillReceiveProps() {
    this.setState({
      progressData: this.props.progressData
    });
  }

  render() {
    let progressValue = this.state.progressData === 'Quened' ? 0 :
     this.state.progressData === 'Planning' ? 15 :
      this.state.progressData === 'Design' ? 40 :
       this.state.progressData === 'Development' ? 70 :
        this.state.progressData === 'Testing' ? 90 :
         this.state.progressData === 'Completed' ? 100 : 100;
    console.log(this.state.progressData);

    let progressColor = this.state.progressData === 'Quened' ? '' :
     this.state.progressData === 'Planning' ? '#2196f3' :
      this.state.progressData === 'Design' ? '#2196f3' :
       this.state.progressData === 'Development' ? '#2196f3' :
        this.state.progressData === 'Testing' ? '#2196f3' :
         this.state.progressData === 'Completed' ? '#4caf50' : '';

    return (
     <div className="progress-wrapper1 d-flex align-items-center">
       <div className="col-3">
         {progressValue + '%'}
       </div>
       <Progress completed={progressValue} color={progressColor}/>
     </div>
    )
  }
}
export default ProgressBar;