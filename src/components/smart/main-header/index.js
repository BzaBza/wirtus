import React from 'react';

import FaSearch from 'react-icons/lib/fa/search';
import TiBell from 'react-icons/lib/ti/bell';

import UserMenu from '../../dumb/user-menu/index';
import Logo from "../../dumb/logo/index";

class MainHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchToggle: true,
        };
        this.handleSearchClick = this.handleSearchClick.bind(this);
    }

    handleSearchClick() {
        this.setState({searchToggle: !this.state.searchToggle});
    }

    render() {
        return (
            <header className="main-header-wrap">
                <div
                    className='main-header d-flex align-content-center justify-content-between col-md-12'>
                    <Logo/>
                    <div className="d-flex header-side-menu align-items-center justify-content-between">
                        <button type="submit" className="button btn btn-primary bg-transparent">
                            Add<span className="text-primary">+</span>
                        </button>
                        <div className="d-flex">
                            <button type="button" className="drop-menu text-white" onClick={this.handleSearchClick}>
                                <FaSearch className="icon"/>
                            </button>
                            <input type="text" className={this.state.searchToggle ? 'hide' : ''}/>
                        </div>
                        <button type="button" className="drop-menu text-white">
                            <TiBell className="icon"/>
                        </button>
                        <UserMenu/>
                    </div>
                    <button type="button" className="header-side-menu-drop"/>
                </div>
            </header>
        );
    }
}
export default MainHeader;
