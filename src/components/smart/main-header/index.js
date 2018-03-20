import React from 'react';

import GoMail from 'react-icons/lib/go/mail';
import TiBell from 'react-icons/lib/ti/bell';

import UserMenu from '../../dumb/user-menu/index';
import Logo from "../../dumb/logo/index";

class MainHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navToggle: false,
            searchToggle: true,
        };
    }

    render() {
        return (
            <header className="main-header-wrap">
                <div
                    className='main-header d-flex align-content-center justify-content-between col-md-12'>
                    <Logo/>
                    <div className="d-flex header-side-menu align-items-center">
                        <button type="submit" className="button btn btn-primary bg-transparent">
                            Add<span className="text-primary">+</span>
                        </button>
                        <button className="drop-menu text-white"><GoMail className="icon"/></button>
                        <button className="drop-menu text-white"><TiBell className="icon"/></button>
                        <UserMenu/>
                    </div>
                    <button type="button" className="header-side-menu-drop"/>
                </div>
            </header>
        );
    }
}
export default MainHeader;
