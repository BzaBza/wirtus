import React, {Component} from 'react';
import {connect} from "react-redux";
import SockJsClient from 'react-stomp';
import PropTypes from "prop-types";

import MessageContentItem from "../../dumb/message-content-item";
import {fetchCurrentMessages} from "../../../redux/actions/fetchCurrentMessages";

class MessageContent extends Component {
  static defaultProps = {
    coversationId: null,
    chatData:[]
  };
  constructor(props) {
    super(props);
    this.state = {};
    this.addMessage = this.addMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(chatMessage) {
    this.clientRef.sendMessage("/app/chat/send/" + this.props.coversationId, JSON.stringify(chatMessage));
    this.message.value = '';
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
       <SockJsClient url='http://165.227.134.105:8080/ws' topics={['/topic/' + this.props.coversationId]}
                     onMessage={(msg) => {
                       this.props.onFetchCurrentMessages(msg);
                     }}
                     ref={(client) => {
                       this.clientRef = client;
                     }}
       />
       <div>
       </div>
       <div>
         <ul className="message-content-item-list">
           {this.props.currentMessages.map((value, index) =>
            <li key={index}>
              <MessageContentItem messageData={value}/>
            </li>
           )}
         </ul>
       </div>
       <div className="send-message-form-wrap">
         <form onSubmit={this.addMessage} className="send-message-form col-7">
           <textarea
            rows="3"
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
MessageContent.propTypes = {
  chatData: PropTypes.array,
  coversationId: PropTypes.number,
  currentMessages: PropTypes.array,
};
export default connect(
 state => ({
   coversationId: state.currentCoversation,
   chatData: state.chat,
   currentMessages: state.currentConvarsationMessages
 }),
 dispatch => ({
   onFetchCurrentMessages: (message) => {
     dispatch(fetchCurrentMessages(message));
   },
 }))(MessageContent);