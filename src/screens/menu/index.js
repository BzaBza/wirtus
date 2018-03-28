import React, {Component} from 'react';
import {TabContent, TabPane, NavItem, Nav, NavLink} from 'reactstrap';
import {connect} from 'react-redux';

import AllProjects from "../../components/container/all-projects";
import Workflow from "../../components/container/workflow";
import {getMenuData} from '../../redux/actions/menuAct';
import {getProjectsData} from '../../redux/actions/projectsAct'
import DropdownSideBtn from "../../components/dumb/dropdown-side-btn";

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
    for (let project in this.props.menuData) {
        counter.push(this.props.menuData[project].length)
      }
    return (
     <section className="d-flex justify-content-center menu-section flex-wrap containers">
       <header className="side-header-wrap d-flex justify-content-between align-items-center">
         <Nav tabs className="pointer side-header-nav align-items-center">
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
         <DropdownSideBtn/>
       </header>
       <TabContent activeTab={this.state.currentTab} className="col-12 content-wrap">
         <TabPane tabId="AllProjects">
           <AllProjects projects={this.props.menuData} onGetProjectsData={this.props.onGetMenuData()}/>
         </TabPane>
         <TabPane tabId="Workflow">
           <Workflow projects={this.props.menuData} onGetWorkflowData={this.props.onGetMenuData()}/>
         </TabPane>
       </TabContent>
     </section>
    );
  }
}

export default connect(
 state => ({
   menuData: state.menu
 }),
 dispatch => ({
   onGetMenuData: () => {
     dispatch(getMenuData());
   }
 }))(Menu);
