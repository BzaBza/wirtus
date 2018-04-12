import React, {Component} from 'react';
// import SockJsClient from 'react-stomp';
import CoversationItem from "../../dumb/coversation-item";
import {connect} from "react-redux";
// import {getNewMessageData} from "../../../redux/actions/fetchNewMessage";
// import {getClientRef} from "../../../redux/actions/clientRef";
import {getCoversationData} from "../../../redux/actions/coversationData";

class Coversation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coversationVisibility: true,
      newCoversationListVisibility: false
    };
    this.coversationToggle = this.coversationToggle.bind(this);
    this.openNewCoversationList = this.openNewCoversationList.bind(this);
    this.addNewCoversation = this.addNewCoversation.bind(this);
  }

  coversationToggle(event) {
    this.setState({
      coversationVisibility: !this.state.coversationVisibility
    })
  }

  openNewCoversationList() {
    this.setState({
      newCoversationListVisibility: !this.state.newCoversationListVisibility
    })
  }

  addNewCoversation(addresseeId) {
    let senderId = JSON.parse(localStorage.getItem('session')).id;
    this.props.onAddNewCoversation(
     JSON.stringify({senderId: senderId, addresseeId: addresseeId})
    );

    // this.props.onGetChatData(
    //  {
    //    id: addresseeId,
    //    type: "CHAT",
    //    content: 'Ut pariaturquia voluptas sit asaerat voluptatem.',
    //    date: '4 April 2016, 5:32 PM',
    //    user: {
    //      name: 'Michelle Stewart',
    //      id: new Date(),
    //    }
    //  }
    // );
    console.log(this.props.chatData)
  }


  render() {
    return (
     <aside className="text-white coversation-section d-flex">
       {/*<SockJsClient url='http://aelmod.sytes.net:8080/ws' topics={['/topic/public']}*/}
       {/*onMessage={(msg) => {*/}
       {/*this.props.onGetNewMessageData(msg)*/}
       {/*}}*/}
       {/*ref={(client) => {*/}
       {/*this.clientRef = client;*/}
       {/*this.props.onGetClientRef(this.clientRef)*/}
       {/*}}*/}
       {/*/>*/}
       <div className="coversation-wrap">
         <div
          className={`coversation-item-wrap ${this.state.coversationVisibility ? 'coversation-hidden' : 'd-block'}`}>
           {
             this.props.chatData.map((value, index) =>
            <CoversationItem coversationData={value} key={index}/>
             )}
         </div>
       </div>
       <div className={`coversation-wrap-btn  ${this.state.coversationVisibility ? 'coversation-hidden' : 'd-flex'}`}>
         <button className="col-md-10 btn-primary coversation-btn" onClick={this.openNewCoversationList}>+ New <span
          className="coversation-btn-cov">coversation</span></button>
         <ul className={`add-new-coversation ${this.state.newCoversationListVisibility ? 'd-block' : 'd-none'}`}>
           {
             this.props.usersData.map((value, index) =>
              <li key={index}>
                <button className="add-new-coversation-user d-flex justify-content-between"
                        onClick={() => {
                         this.addNewCoversation(value.id);
                        }}>
                  <span className="d-block">{value.name}</span>
                  <span className="d-block">+</span>
                </button>
              </li>
             )
           }
         </ul>
       </div>
       <div className="coversation-toggle-btn" onClick={this.coversationToggle}/>
     </aside>
    );
  }
}

export default connect(
 state => ({
   chatData: state.chat,
   usersData: state.users,
 }),
 dispatch => ({
   // onGetNewMessageData: (msg) => {
   //   dispatch(getNewMessageData(msg));
   // },
   // onGetChatData: (msg) => {
   //   dispatch(getChatData(msg));
   // },
   // onGetClientRef: (clientRef) => {
   //   dispatch(getClientRef(clientRef));
   // },
   onAddNewCoversation: (coversationData) => {
     dispatch(getCoversationData(coversationData));
   },
 }))(Coversation);
