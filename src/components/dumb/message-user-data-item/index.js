import React, {Component} from 'react';


class MessageUserDataItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
       <div className="message-user-data-item text-center">
          <div className="co-md-9">
            <img src={'./workflow/photo-1457459588520-2ae325c92c09.png'} alt="user" className="message-user-data-item-photo"/>
          </div>
          <div>
            <div>{this.props.user.name}</div>
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
            <h6>{this.props.user.address}</h6>
          </div>
          <div>
            <p className="gray message-user-data-item-description">Organization</p>
            <h6>{this.props.user.organization}</h6>
          </div>
       </div>
    );
  }
}

export default MessageUserDataItem;
