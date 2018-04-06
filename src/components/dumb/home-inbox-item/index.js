import React, {Component} from 'react';


class HomeInboxItem extends Component {
  render() {

    return (
     <div className="d-flex inbox-item">
       <div className="inbox-item-image"><img src={this.props.data.url} alt="user"/></div>
       <div>
         <p className="d-flex justify-content-between"><span
          className="text-white inbox-item-user-name">{this.props.data.userName}</span><span
          className="text-primary inbox-item-data-time">{this.props.data.dataTime}</span></p>
         <div className="gray inbox-item-text">{this.props.data.text}</div>
       </div>
     </div>
    );
  }
}

export default HomeInboxItem;
