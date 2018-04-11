import React, {Component} from 'react';


class MessageUserDataItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
       <div className="message-user-data-item d-flex align-items-center">
        <div className="text-center">
          <div>
            <img src={this.props.user.url} alt="user" className="message-user-data-item-photo"/>
          </div>
          <div>
            <div>{this.props.user.userName}</div>
            <div className="gray">{this.props.user.position}</div>
          </div>
          <div className="gray message-user-data-item-main-description">
            {this.props.user.description}
          </div>
          <div>
            <p className="gray message-user-data-item-description">Email</p>
            <h6>{this.props.user.email}</h6>
          </div>
          <div>
            <p className="gray message-user-data-item-description">Phone</p>
            <h6>{this.props.user.phone}</h6>
          </div>
          <div>
            <p className="gray message-user-data-item-description">Address</p>
            <h6>{this.props.user.adress}</h6>
          </div>
          <div>
            <p className="gray message-user-data-item-description">Organization</p>
            <h6>{this.props.user.organization}</h6>
          </div>
        </div>
       </div>
    );
  }
}

export default MessageUserDataItem;
