import React, {Component} from 'react';
import Progress from 'react-progressbar';

class ProgressBar extends Component {



  render() {
    let progressValue = this.props.progressData === 'Quened' ? 0 :
     this.props.progressData === 'Planning' ? 15 :
      this.props.progressData === 'Design' ? 40 :
       this.props.progressData === 'Development' ? 70 :
        this.props.progressData === 'Testing' ? 90 :
         this.props.progressData === 'Completed' ? 100 : 100;

    let progressColor = this.props.progressData === 'Quened' ? '' :
     this.props.progressData === 'Planning' ? '#2196f3' :
      this.props.progressData === 'Design' ? '#2196f3' :
       this.props.progressData === 'Development' ? '#2196f3' :
        this.props.progressData === 'Testing' ? '#2196f3' :
         this.props.progressData === 'Completed' ? '#4caf50' : '';

    return (
     <div className="progress-wrapper1 d-flex align-items-center">
       <div className="col-3 text-left progress-side-text">
         {progressValue + '%'}
       </div>
       <Progress completed={progressValue} color={progressColor}/>
     </div>
    )
  }
}
export default ProgressBar;