import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DropPeriod from "../drop-period/index";


class WorkflowItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOptionsOpen: false,
    };

    this.onOptionsOpen = this.onOptionsOpen.bind(this);
  }

  onOptionsOpen() {
    this.setState({
      isOptionsOpen: !this.state.isOptionsOpen,
    });
  }

  render() {
    return (
     <div className="workflow-item d-flex align-items-center justify-content-between">
       <div>
         <img src={this.props.url} alt="user_photo"/>
       </div>
       <div className="project-data d-flex flex-wrap justify-content-center align-items-center">
         <div className="project-name col-12 text-white">
           {this.props.task}
         </div>
         <div className="col-12 gray project-content">
           <span>{this.props.company + ' · '}</span>
           <span>{'$' + this.props.price}</span>
         </div>
       </div>
       <div className="dropButton">
         <DropPeriod value={this.props.projects}/>
       </div>
     </div>
    );
  }
}

WorkflowItem.propTypes = {
  task: PropTypes.string,
  company: PropTypes.string,
  price: PropTypes.number,
  url: PropTypes.string,
};

WorkflowItem.defaultProps = {
  task: '',
  company: '',
  price: null,
  url: '',
  isAtHome: false
};

export default WorkflowItem;