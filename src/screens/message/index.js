import React, {Component} from 'react';
import {TabContent, TabPane, NavItem, Nav, NavLink} from 'reactstrap';
import DropdownSideBtn from "../../components/dumb/dropdown-side-btn";
import {connect} from "react-redux";
import {getChatData} from "../../redux/actions/chatAct";

class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 'Inbox',
    };
    this.toggleTab = this.toggleTab.bind(this);
  }

  componentWillMount(){
    this.props.onGetChatData()
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
     <section className="message-section containers">
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
           <div className="text-white container drop-description">Show projects:</div>
         </div>
       </header>
       <TabContent activeTab={this.state.currentTab} className="col-12 content-wrap">
         <TabPane tabId="AllProjects">

         </TabPane>
         <TabPane tabId="Workflow">

         </TabPane>
       </TabContent>
     </section>
    );
  }
}
export default connect(
 state => ({
   chatData: state.chat,
 }),
 dispatch => ({
   onGetChatData: () => {
     dispatch(getChatData());
   },
 }))(Message);
