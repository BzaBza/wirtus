import React, {Component} from 'react';


class MessageContentItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
     <div>
       {this.props.messageData.content}
     </div>
    );
  }
}

export default MessageContentItem;
