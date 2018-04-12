import React, {Component} from 'react';
import {NavItem, Nav, NavLink} from 'reactstrap';
import DropdownSideBtn from "../../components/dumb/dropdown-side-btn";
import {connect} from "react-redux";
import Coversation from "../../components/containers/coversation";
import MessageContent from "../../components/containers/message-content";
import MessageUserData from "../../components/containers/message-user-data";
import {getChatData} from "../../redux/actions/chatAct";
import {getUsersData} from "../../redux/actions/usersData";
import axios from "axios/index";


class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 'Inbox',
    };
    this.toggleTab = this.toggleTab.bind(this);
  }

  componentWillMount(){
    this.props.onGetChatData();
    this.props.onGetUsersData();

    axios.get('http://aelmod.sytes.net:8080/conversations?userId=0')
     .then(function (response) {
       console.log(response);
     })
     .catch(function (error) {
       console.log(error);
     });
  }


  toggleTab(tab) {
    if (this.state.currentTab !== tab) {
      this.setState({
        currentTab: tab,
      });
    }
  }

  render() {
    return (
     <section className="message-section message-section d-flex justify-content-center flex-wrap containers">
       <header className="side-header-wrap d-flex justify-content-between align-items-center">
         <Nav tabs className="pointer side-header-nav align-items-center">
           <NavItem className={(this.state.currentTab === 'Inbox') ?
            'active-side-header-link' : ''}>
             <NavLink
              className={(this.state.currentTab === 'Inbox') ?
               'active-side-header-link' : ''} onClick={() => {
               this.toggleTab('Inbox');
             }}>
               <span className="menu-links">Inbox </span> ()
             </NavLink>
           </NavItem>
           <NavItem className={(this.state.currentTab === 'Sent') ?
            'active-side-header-link' : ''}>
             <NavLink
              className={(this.state.currentTab === 'Sent') ?
               'active-side-header-link' : ''} onClick={() => {
               this.toggleTab('Sent');
             }}>
               <span className="menu-links">Sent</span>
             </NavLink>
           </NavItem>
           <NavItem className={(this.state.currentTab === 'Trash') ?
            'active-side-header-link' : ''}>
             <NavLink
              className={(this.state.currentTab === 'Trash') ?
               'active-side-header-link' : ''} onClick={() => {
               this.toggleTab('Trash');
             }}>
               <span className="menu-links">Trash</span>
             </NavLink>
           </NavItem>
         </Nav>
         <div className="d-flex align-items-center justify-content-between drop-side-wrap">
           <div className="text-white drop-btn-description drop-description">Filter messages:</div>
           <DropdownSideBtn filterData={this.filterData} currentData='All'
                            data={['date']}/>
         </div>
       </header>
       <div className="content-wrap d-flex message-content justify-content-between">
          <div className="message-content-coversation">
            <Coversation chatData={this.props.chatData}/>
          </div>
         <div className="message-content-wrap">
           <MessageContent chatData={this.props.chatData}/>
         </div>
         <div className="message-wrap">
           <MessageUserData userData={this.props.usersData}/>
         </div>
       </div>
     </section>
    );
  }
}
export default connect(
 state => ({
   chatData: state.chat,
   usersData: state.users,
 }),
 dispatch => ({
   onGetChatData: () => {
     dispatch(getChatData());
   },
   onGetUsersData: () => {
     dispatch(getUsersData());
   },
 }))(Message);
