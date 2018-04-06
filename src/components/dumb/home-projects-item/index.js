import React, {Component} from 'react';
import DropPeriod from "../drop-period";


class HomeProjectsItem extends Component {
  render() {
    return (
     <div className="d-flex project-item">
       <div className="d-flex ">
         <div className="home-project-item-user"><img src={this.props.data.url} alt="user"/></div>
         <div className="text-white home-project-item-title">
           <div>{this.props.data.task}</div>
           <div className="gray home-project-item-footer"><span>{this.props.data.company}</span>·<span>${this.props.data.price}</span></div>
         </div>
       </div>
       <DropPeriod/>
     </div>
    );
  }
}

export default HomeProjectsItem;
