import React, {Component} from 'react';
import {NavItem, Nav, NavLink} from 'reactstrap';
import DropdownSideBtn from "../../components/dumb/dropdown-side-btn";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import Coversation from "../../components/containers/coversation";
import MessageContent from "../../components/containers/message-content";
import MessageUserData from "../../components/containers/message-user-data";
import {getUsersData} from "../../redux/actions/usersData";
import IoAndroidDelete from "react-icons/lib/io/android-delete";
import IoPaperAirplane from "react-icons/lib/io/paper-airplane";
import IoAndroidArchive from "react-icons/lib/io/android-archive";

class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 'Inbox',
    };
    this.toggleTab = this.toggleTab.bind(this);
  }

  componentWillMount() {
    this.props.onGetUsersData();
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
         <Nav tabs className="pointer side-header-nav align-items-center flex-nowrap">
           <NavItem className={(this.state.currentTab === 'Inbox') ?
            'active-side-header-link' : ''}>
             <NavLink
              className={(this.state.currentTab === 'Inbox') ?
               'active-side-header-link' : ''} onClick={() => {
               this.toggleTab('Inbox');
             }}>
               <IoAndroidArchive className="message-side-header-icon"/>
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
               <IoPaperAirplane className="message-side-header-icon"/>
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
               <IoAndroidDelete className="message-side-header-icon"/>
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
         <div className="message-content-wrap col-xl-7">
           <MessageContent chatData={this.props.chatData}/>
         </div>
         <MessageUserData/>
       </div>
     </section>
    );
  }
}
Message.propTypes = {
  chatData: PropTypes.array,
};
export default connect(
 state => ({
   chatData: state.chat,
 }),
 dispatch => ({
   onGetUsersData: () => {
     dispatch(getUsersData());
   },
 }))(Message);
