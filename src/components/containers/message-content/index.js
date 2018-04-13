import React, {Component} from 'react';
import {connect} from "react-redux";
import SockJsClient from 'react-stomp';
import MessageContentItem from "../../dumb/message-content-item";
import {getNewMessageData} from "../../../redux/actions/fetchNewMessage";

class MessageContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.addMessage = this.addMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(chatMessage) {
    this.clientRef.sendMessage("/app/chat/send/" + this.props.coversationId, JSON.stringify(chatMessage));
  };

  addMessage(event) {
    event.preventDefault();
    let chatMessage = {
      user: {username: JSON.parse(localStorage.getItem('session')).username},
      content: this.message.value,
    };
    this.sendMessage(chatMessage)
  }

  render() {
    return (
     <section className="text-white message-content-section">
       <SockJsClient url='http://aelmod.sytes.net:8080/ws' topics={['/app/topic/' + this.props.coversationId]}
                     onMessage={(msg) => {
                       console.log(msg);
                       this.props.onGetNewMessageData(msg)
                     }}
                     ref={(client) => {
                       this.clientRef = client;
                     }}
       />
       <div>
       </div>
       <div>
         <ul className="message-content-item-list">
           {this.props.chatData.map((value, index) =>
            <li key={index}>
              <MessageContentItem messageData={value}/>
            </li>
           )}
         </ul>
       </div>
       <div className="send-message-form-wrap">
         <form onSubmit={this.addMessage} className="send-message-form col-7">
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
   coversationId: state.currentCoversation,
   chatData: state.chat,
 }),
 dispatch => ({
   onGetNewMessageData: (msg) => {
     dispatch(getNewMessageData(msg));
   },
 }))(MessageContent);