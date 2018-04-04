import React, {Component} from 'react';


class HomeProjectsItem extends Component {
  render() {
    return (
     <div className="d-flex project-item">
       <div><img src={this.props.data.url} alt="user"/></div>
       <div>
         <div>{this.props.data.task}</div>
         <div><span>{this.props.data.company}</span><span>${this.props.data.price}</span></div>
       </div>
       <button>t</button>
     </div>
    );
  }
}

export default HomeProjectsItem;
