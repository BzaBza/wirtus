import React, {Component} from 'react';


class MessageContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
     <section className="text-white message-content-section">
       <ul>
         {this.props.chatData.map}
       </ul>
     </section>
    );
  }
}

export default MessageContent;
