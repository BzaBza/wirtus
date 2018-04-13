import React, {Component} from 'react';
import {connect} from "react-redux";
import MessageUserDataItem from "../../dumb/message-user-data-item";


class MessageUserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageUserDataItemVisibility: true
    };
    this.messageUserDataItemToggle = this.messageUserDataItemToggle.bind(this)
  }

  messageUserDataItemToggle(event) {
    this.setState({
      messageUserDataItemVisibility: !this.state.messageUserDataItemVisibility
    })
  }
  render() {
    return (
     <aside className="message-user-data-aside">
       <div className={`message-user-data-wrap ${this.state.messageUserDataItemVisibility ? 'message-data-hidden ' : 'd-block'}`}>
       {this.props.currentAddressee !== null ?
        <div>
          <ul className="message-user-data-list text-white">
            {this.props.usersData.map((value, index) =>
             <li key={index}>
               <MessageUserDataItem user={value}/>
             </li>
            )}
          </ul>
        </div>
        :
        <div/>
       }
       </div>
       <div className="message-data-toggle-btn" onClick={this.messageUserDataItemToggle}/>
     </aside>
    );
  }
}

export default connect(
 state => ({
   usersData: state.users.filter(item => item.id === state.addressee),
   currentAddressee: state.addressee
 }))(MessageUserData);