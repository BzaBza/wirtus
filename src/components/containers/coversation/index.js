import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import axios from "axios/index";

import CoversationItem from "../../dumb/coversation-item";
import {getCoversationData} from "../../../redux/actions/coversationData";
import {getCurrentCoversationId} from "../../../redux/actions/getCurrentConversationId";
import {getCurrentAddressee} from "../../../redux/actions/currentAddressee";
import {fetchCurrentConversationMessages} from "../../../redux/actions/fetchCurrentConversationMessages";
import {getAllCoversationData} from "../../../redux/actions/getAllCoversations";

class Coversation extends Component {
  static defaultProps = {
    chatData: [],
    usersData: []
  };

  constructor(props) {
    super(props);
    this.state = {
      coversationVisibility: true,
      newCoversationListVisibility: false,
      coversationActive: '',
    };
    this.coversationToggle = this.coversationToggle.bind(this);
    this.openNewCoversationList = this.openNewCoversationList.bind(this);
    this.addNewCoversation = this.addNewCoversation.bind(this);
    this.openCoversation = this.openCoversation.bind(this);
    this.getUnusedAddressee = this.getUnusedAddressee.bind(this);
  }

  componentWillMount(){
    this.props.onAllGetCoversations()
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
    axios.get('http://165.227.134.105:8080/chat/conversation?conversationId=' + coversationId)
     .then(
      (response)=>{
        this.props.onFetchCurrentConversationMessages(response.data);
      }
     )
     .catch(function (error) {
       console.log(error);
     });
    this.props.onGetCurrentCoversation(coversationId);

    this.setState({
      coversationActive: coversationId
    })
  }

  getUnusedAddressee() {
    const usedAddressee = [];
    for (let i = 0; i < this.props.chatData.length; i++) {
      usedAddressee.push(this.props.chatData[i].addressee.id)
    }
    return this.props.usersData.filter(item => !usedAddressee.includes(item.id));
  }

  render() {
    return (
     <aside className="text-white coversation-section d-flex">
       <div
        className={`coversation-items-wrap ${this.state.coversationVisibility ? 'coversation-hidden' : 'd-block'}`}>
         {
           this.props.chatData.map((value, index) =>
            <div key={index} onClick={() => {
              this.openCoversation(value.id);
              this.props.onGetCurrentAddressee(value.addressee.id)
            }}
                 className={`coversation-item-wrapper ${this.state.coversationActive === value.id ? 'coversationActive' : ''}`}
            >
              <CoversationItem coversationData={value}/>
            </div>
           )}
       </div>
       <div className={`coversation-wrap-btn  ${this.state.coversationVisibility ? 'coversation-hidden' : 'd-flex'}`}>
         <button className="col-md-10 btn-primary coversation-btn" onClick={this.openNewCoversationList}>+ New <span
          className="coversation-btn-cov">coversation</span></button>
         <ul className={`add-new-coversation ${this.state.newCoversationListVisibility ? 'd-block' : 'd-none'}`}>
           {
             this.getUnusedAddressee().map((value, index) =>
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

Coversation.propTypes = {
  usersData: PropTypes.array,
  chatData: PropTypes.array,
};
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
   onFetchCurrentConversationMessages: (msg) => {
     dispatch(fetchCurrentConversationMessages(msg));
   },
   onAllGetCoversations: () => {
     dispatch(getAllCoversationData());
   },
 }))(Coversation);
