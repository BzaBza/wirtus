import React, {Component} from 'react';
import {TabContent, TabPane, NavItem, Nav, NavLink} from 'reactstrap';
import {connect} from 'react-redux';

import AllProjects from "../../components/container/all-projects/index";
import Workflow from "../../components/container/workflow/index";
import {getWorkflowData} from '../../redux/actions/workflowAct'

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 'AllProjects',
    };

    this.toggleTab = this.toggleTab.bind(this);
  }

  toggleTab(tab) {
    if (this.state.currentTab !== tab) {
      this.setState({
        currentTab: tab,
      });
    }
  }


  render() {
    let counter = [];
    for (let project in this.props.workflowData) {
      {
        counter.push(this.props.workflowData[project].length)
      }
    }
    return (
     <section className="d-flex justify-content-center menu-section flex-wrap">
       <header className="side-header-wrap d-flex justify-content-between align-items-center">
         <Nav tabs className="pointer sign-nav align-items-center">
           <NavItem className={ (this.state.currentTab === 'AllProjects') ?
            'active-side-header-link' : '' }>
             <NavLink
              className={ (this.state.currentTab === 'AllProjects') ?
               'active-side-header-link' : '' } onClick={ () => {
               this.toggleTab('AllProjects');
             }}>
               All Projects({
                 counter.length > 0 ? counter.reduce(function (acc, item) {
                   return acc + item;
                 }, 0) : 0
               })
             </NavLink>
           </NavItem>
           <NavItem className={ (this.state.currentTab === 'Workflow') ?
            'active-side-header-link' : '' }>
             <NavLink
              className={ (this.state.currentTab === 'Workflow') ?
               'active-side-header-link' : '' } onClick={ () => {
               this.toggleTab('Workflow');
             }}>
               Workflow
             </NavLink>
           </NavItem>
         </Nav>
         <button>
           TEST >
         </button>
       </header>
       <TabContent activeTab={this.state.currentTab} className="containers col-12">
         <TabPane tabId="AllProjects">
           <AllProjects/>
         </TabPane>
         <TabPane tabId="Workflow">
           <Workflow projects={this.props.workflowData} onGetWorkflowData={this.props.onGetWorkflowData()}/>
         </TabPane>
       </TabContent>
     </section>
    );
  }
}

export default connect(
 state => ({
   workflowData: state.workflow
 }),
 dispatch => ({
   onGetWorkflowData: () => {
     dispatch(getWorkflowData());
   }
 }))(Menu);
