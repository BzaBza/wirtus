import React, {Component} from 'react';
import MessageUserDataItem from "../../dumb/message-user-data-item";


class MessageUserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
     <aside>
       {/*<ul className="message-user-data-list text-white">*/}
         {/*{this.props.userData.filter(item => item.userName.includes('1')).map((value, index) =>*/}
         {/*<li key={index}>*/}
           {/*<MessageUserDataItem user={value}/>*/}
         {/*</li>*/}
         {/*)}*/}
       {/*</ul>*/}
     </aside>
    );
  }
}

export default MessageUserData;
