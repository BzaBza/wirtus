import React, {Component} from 'react';
// import SockJsClient from 'react-stomp';
import CoversationItem from "../../dumb/coversation-item";
import {connect} from "react-redux";
import {getNewMessageData} from "../../../redux/actions/fetchNewMessage";
import {getClientRef} from "../../../redux/actions/clientRef";
import {addNewCoversation} from "../../../redux/actions/addNewCoversation";

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
    this.props.onAddNewCoversation(
     JSON.stringify({senderId: 0, addresseeId: addresseeId})
    )
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
           {this.props.chatData.map((value, index) =>
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
   onGetNewMessageData: (msg) => {
     dispatch(getNewMessageData(msg));
   },
   onGetClientRef: (clientRef) => {
     dispatch(getClientRef(clientRef));
   },
   onAddNewCoversation: (coversationData) => {
     dispatch(addNewCoversation(coversationData));
   },
 }))(Coversation);
