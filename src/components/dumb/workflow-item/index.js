import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


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
   <div className="workflow-item d-flex">
    <div className="task-data">
     <h5 className="task-title">
      <Link to={this.props.locate} href={this.props.locate} className="task-name">
       {this.props.task}
      </Link>
     </h5>
     <div>
      <p>
       <span>{this.props.company}</span>
       <span>{this.props.price}</span>
      </p>
     </div>
    </div>

    <button className="task-options" onClick={this.onOptionsOpen}/>

   </div>
  );
 }
}

WorkflowItem.propTypes = {
 name: PropTypes.string,
 locate: PropTypes.string,
 status: PropTypes.string,
 time: PropTypes.string,
 isAtHome: PropTypes.bool
};

WorkflowItem.defaultProps = {
 name: '',
 locate: '',
 status: '',
 time: '',
 isAtHome: false
};

export default WorkflowItem;