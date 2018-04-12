import React, {Component} from 'react';
import {connect} from "react-redux";
import MessageUserDataItem from "../../dumb/message-user-data-item";


class MessageUserData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
     <aside>
       {this.props.currentAddressee !== null ?
        <ul className="message-user-data-list text-white">
          {this.props.usersData.map((value, index) =>
           <li key={index}>
             <MessageUserDataItem user={value}/>
           </li>
          )}
        </ul>
        :
        <div/>
       }
     </aside>
    );
  }
}

export default connect(
 state => ({
   usersData: state.users.filter(item => item.id === state.addressee),
   currentAddressee: state.addressee
 }))(MessageUserData);