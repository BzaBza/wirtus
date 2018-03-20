import React from 'react';
import { ButtonDropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Link } from 'react-router-dom';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import UserImage from '../../../img/header-side-user.png';

export default class UserMenu extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    }

    render() {
        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="border-0">
                <DropdownToggle className="border-0 bg-transparent">
                    <img src={UserImage} className="user-image" alt="user"/>
                    <FaAngleDown/>
                </DropdownToggle>
                <DropdownMenu>
                    <ul>
                        <li><Link to='/'>logout</Link></li>
                    </ul>
                </DropdownMenu>
            </ButtonDropdown>
        );
    }
}
