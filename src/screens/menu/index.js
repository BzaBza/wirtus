import React, {Component} from 'react';
import {TabContent, TabPane, NavItem, Nav, NavLink} from 'reactstrap';
import {connect} from 'react-redux';

import AllProjects from "../../components/containers/all-projects";
import Workflow from "../../components/containers/workflow";
import {getMenuData} from '../../redux/actions/menuAct';
import DropdownSideBtn from "../../components/dumb/dropdown-side-btn";


class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 'AllProjects',
      menuData: props.menuData
    };
    this.filterData = this.filterData.bind(this);
    this.itemCounter = this.itemCounter.bind(this);
    this.toggleTab = this.toggleTab.bind(this);
    this.moveItem = this.moveItem.bind(this);
  }


  componentWillMount() {
    this.props.onGetMenuData()
  }

  toggleTab(tab) {
    if (this.state.currentTab !== tab) {
      this.setState({
        currentTab: tab,
      });
    }
  }

  componentWillReceiveProps() {
    this.setState((initialState, props) => (
     {
       menuData: props.menuData
     }
    ));
  }

  filterData(currentCompany) {
    this.props.onFilterMenuData(currentCompany)
  }


  itemCounter() {
    let counter = [];
    for (let project in this.props.menuData) {
      counter.push(this.props.menuData[project].filter(item => item.company.includes(this.props.filter)).length);
    }
    return counter
  }

  moveItem(to, id, from) {
    console.log(to, id, from);
    const projects = this.props.menuData;

    const [removed] = projects[from].splice(from, 1);
    if (from === 'completed' && to !== 'completed') {
      removed.status = to;
    }
    if (to === 'completed') removed.status = 'completed';
    projects[to].splice(to, 0, removed);

    this.setState({
      menuData: projects
    });
  }

  render() {
    return (
     <section className="d-flex justify-content-center menu-section flex-wrap containers">
       <header className="side-header-wrap d-flex justify-content-between align-items-center">
         <Nav tabs className="pointer side-header-nav align-items-center">
           <NavItem className={(this.state.currentTab === 'AllProjects') ?
            'active-side-header-link' : ''}>
             <NavLink
              className={(this.state.currentTab === 'AllProjects') ?
               'active-side-header-link' : ''} onClick={() => {
               this.toggleTab('AllProjects');
             }}>
               <span className="menu-links">All Projects</span>
               ({
               this.itemCounter().length > 0 ? this.itemCounter().reduce(function (acc, item) {
                 return acc + item;
               }, 0) : 0
             })
             </NavLink>
           </NavItem>
           <NavItem className={(this.state.currentTab === 'Workflow') ?
            'active-side-header-link' : ''}>
             <NavLink
              className={(this.state.currentTab === 'Workflow') ?
               'active-side-header-link' : ''} onClick={() => {
               this.toggleTab('Workflow');
             }}>
               <span className="menu-links">Workflow</span>
             </NavLink>
           </NavItem>
         </Nav>
         <div className="d-flex align-items-center justify-content-end drop-side-wrap">
           <div className="text-white drop-description">Show projects:</div>
           <DropdownSideBtn filterData={this.filterData} currentData='All'
                            data={['All', 'Microsoft', 'Google', 'Symu.co', 'JCD.pl', 'Facebook', 'Themeforest']}/>
         </div>
       </header>
       <TabContent activeTab={this.state.currentTab} className="col-12 content-wrap">
         <TabPane tabId="AllProjects">
           <AllProjects projects={this.state.menuData} filter={this.props.filter}/>
         </TabPane>
         <TabPane tabId="Workflow">
           <Workflow projects={this.state.menuData} filter={this.props.filter} moveItem={this.moveItem}/>
         </TabPane>
       </TabContent>
     </section>
    );
  }
}

export default connect(
 state => ({
   menuData: state.menu,
   filter: state.menuFilter
 }),
 dispatch => ({
   onGetMenuData: () => {
     dispatch(getMenuData());
   },
   onFilterMenuData: (currentCompany) => {
     dispatch({type: 'FILTER_MENU_DATA', payload: currentCompany});
   }
 }))(Menu);
