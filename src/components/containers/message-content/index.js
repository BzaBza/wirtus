import React, {Component} from 'react';
// import SockJsClient from 'react-stomp';

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
           <h1>MESSAGE</h1>
         </ul>
       </div>
       <div>
         <form onSubmit={this.addMessage}>
           <input
            type='text'
            placeholder="Add message"
            ref={(input => {
              this.message = input
            })}
           />
           <button type="submit"
                   className="btn btn-primary authentication-button bg-transparent text-dark">
             Enter
           </button>
         </form>
       </div>
     </section>
    );
  }
}

export default MessageContent;