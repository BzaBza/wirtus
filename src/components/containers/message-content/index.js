import React, {Component} from 'react';
import MessageContentItem from "../../dumb/message-content-item";
import {connect} from "react-redux";

class MessageContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.addMessage = this.addMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(msg) {
    this.props.clientRef.sendMessage('/app/chat.sendMessage', JSON.stringify({sender: "Username", content: msg, type: 'CHAT'}));
  };

  addMessage(event) {
    event.preventDefault();
    this.sendMessage(this.message.value)
  }

  render() {
    return (
     <section className="text-white message-content-section">
       <div>
       </div>
       <div>
         <ul>
           {this.props.chatData.map((value, index) =>
            <li key={index}>
              <MessageContentItem messageData={value}/>
            </li>
           )}
         </ul>
       </div>
       <div className="send-message-form-wrap">
         <form onSubmit={this.addMessage} className="send-message-form-">
           <textarea
            placeholder="Write a message"
            ref={(input => {
              this.message = input
            })}
            className="send-message-input"
           />
           <button type="submit" className="send-message-btn"/>
         </form>
       </div>
     </section>
    );
  }
}
export default connect(
 state => ({
   clientRef: state.clientRef,
 }))(MessageContent);
