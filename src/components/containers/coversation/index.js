import React, {Component} from 'react';
import CoversationItem from "../../dumb/coversation-item";
import {connect} from "react-redux";
import {getCoversationData} from "../../../redux/actions/coversationData";
import {getCurrentCoversationId} from "../../../redux/actions/getCurrentConversationId";
import {getCurrentAddressee} from "../../../redux/actions/currentAddressee";


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
    this.openCoversation = this.openCoversation.bind(this);
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
  }

  openCoversation(coversationId) {
    this.props.onGetCurrentCoversation(coversationId);
  }

  render() {
    return (
     <aside className="text-white coversation-section d-flex">
       <div className="coversation-wrap">
         <div
          className={`coversation-item-wrap ${this.state.coversationVisibility ? 'coversation-hidden' : 'd-block'}`}>
           {
             this.props.chatData.map((value, index) =>
              <div key={index} onClick={() => {
                this.openCoversation(value.id);
                this.props.onGetCurrentAddressee(value.addressee.id)
              }}>
                <CoversationItem coversationData={value}/>
              </div>
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
   onAddNewCoversation: (coversationData) => {
     dispatch(getCoversationData(coversationData));
   },
   onGetCurrentCoversation: (id) => {
     dispatch(getCurrentCoversationId(id));
   },
   onGetCurrentAddressee: (id) => {
     dispatch(getCurrentAddressee(id));
   },
 }))(Coversation);
