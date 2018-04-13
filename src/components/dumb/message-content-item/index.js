import React, {Component} from 'react';


class MessageContentItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
     <div
      className={`${this.props.messageData.user.id === JSON.parse(localStorage.getItem('session')).id ? 'user-message-wrap' : 'addressee-message-wrap'}`}>
       <div className={`${this.props.messageData.user.id === JSON.parse(localStorage.getItem('session')).id ? 'user-message-content-wrap' : 'addressee-message-content-wrap'}`}>
         <div
          className={`${this.props.messageData.user.id === JSON.parse(localStorage.getItem('session')).id ? 'user-message' : 'addressee-message'}`}>
           {this.props.messageData.content}
         </div>
         <div className={`message-content-item-date ${this.props.messageData.user.id === JSON.parse(localStorage.getItem('session')).id ? 'text-right' : 'text-left'}`}>
           {this.props.messageData.date}
         </div>
       </div>
     </div>
    );
  }
}

export default MessageContentItem;
