import React, { Component } from 'react';
import { TabContent, TabPane, NavItem, Nav, NavLink } from 'reactstrap';

import AllProjects from "../../components/smart/all-projects/index";

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
        return (
            <section className="d-flex justify-content-center containers col-12">
                <div className="col-md-12 col-sm-12 sign">
                    <header className="side-header-wrap d-flex justify-content-between col-12 align-items-center">
                        <Nav tabs className="pointer sign-nav align-items-center">
                            <NavItem className={ (this.state.currentTab === 'AllProjects') ?
                                'active-side-header-link' : '' }>
                                <NavLink
                                    className={ (this.state.currentTab === 'AllProjects') ?
                                        'active-side-header-link' : '' } onClick={ () => {
                                        this.toggleTab('AllProjects');
                                    }}>
                                    All Projects
                                </NavLink>
                            </NavItem>
                            <NavItem className={ (this.state.currentTab === 'login') ?
                                'active-side-header-link' : '' }>
                                <NavLink
                                    className={ (this.state.currentTab === 'login') ?
                                        'active-side-header-link' : '' } onClick={ () => {
                                        this.toggleTab('login');
                                    }}>
                                    Login
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </header>
                    <TabContent activeTab={this.state.currentTab}>
                        <TabPane tabId="AllProjects">
                            <AllProjects/>
                        </TabPane>
                    </TabContent>
                </div>
            </section>
        );
    }
}

export default Menu;
