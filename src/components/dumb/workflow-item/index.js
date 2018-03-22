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
  if (this.props.isAtHome) {
   return (
    <li className="service-item">

          <span className="task-icon">
            {this.props.name[0]}
          </span>

     <div className="task-data">

      <h5>
       <Link to={this.props.locate} href={this.props.locate} className="task-name">
        {this.props.name}
       </Link>
      </h5>
      {
       (this.props.status === 'completed') ?
        <span className="task-status completed">
                      Completed!
                </span>
        :
        <span className={`task-status ${this.props.status === 'delay' ? 'delay' : 'work'}`}>
                  {this.props.time}
                </span>
      }
     </div>

     <button className="task-options" onClick={this.onOptionsOpen}>

     </button>

    </li>
   );
  } return (
   <div className="workflow-item">

        <span className="task-icon">
          {this.props.name[0]}
        </span>

    <div className="task-data">

     <h5 className="task-title">
      <Link to={this.props.locate} href={this.props.locate} className="task-name">
       {this.props.name}
      </Link>
     </h5>

     {
      (this.props.status === 'completed') ?
       <span className="task-status completed">
                    Completed!
              </span>
       :
       <span className={`task-status ${this.props.status === 'delay' ? 'delay' : 'work'}`}>
                {this.props.time}
              </span>
     }

    </div>

    <button className="task-options" onClick={this.onOptionsOpen}>
    </button>

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