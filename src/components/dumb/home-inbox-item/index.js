import React, {Component} from 'react';


class HomeInboxItem extends Component {
  render() {

    return (
     <div className="d-flex inbox-item">
       <div><img src={this.props.data.url} alt="user"/></div>
       <div>
         <div className="d-flex justify-content-between"><span className="text-white">{this.props.data.userName}</span><span className="text-primary">{this.props.data.dataTime}</span></div>
         <div className="gray">{this.props.data.text}</div>
       </div>
     </div>
    );
  }
}

export default HomeInboxItem;
