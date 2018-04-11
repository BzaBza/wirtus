import React, {Component} from 'react';
import SockJsClient from 'react-stomp';
import CoversationItem from "../../dumb/coversation-item";
import {connect} from "react-redux";
import {getNewMessageData} from "../../../redux/actions/fetchNewMessage";
import {getClientRef} from "../../../redux/actions/clientRef";

class Coversation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coversationVisibility: true,
    };
    this.coversationToggle = this.coversationToggle.bind(this)
  }

  coversationToggle(event){
    this.setState({
      coversationVisibility: !this.state.coversationVisibility
    })
  }

  render() {
    return (
     <aside className="text-white coversation-section d-flex">
       <SockJsClient url='http://aelmod.sytes.net:8080/ws' topics={['/topic/public']}
                     onMessage={(msg) => {
                       this.props.onGetNewMessageData(msg)
                     }}
                     ref={(client) => {
                       this.clientRef = client;
                       this.props.onGetClientRef(this.clientRef)
                     }}
       />
        <div className="coversation-wrap">
          <div className={`coversation-item-wrap ${this.state.coversationVisibility ? 'coversation-hidden' : 'd-block'}`}>
            {this.props.chatData.map((value, index) =>
             <CoversationItem coversationData={value} key={index}/>
            )}
          </div>
        </div>
        <div className={`coversation-wrap-btn  ${this.state.coversationVisibility ? 'coversation-hidden' : 'd-flex'}`}>
          <button className="col-md-10 btn-primary coversation-btn">+ New <span className="coversation-btn-cov">coversation</span></button>
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
 }))(Coversation);
