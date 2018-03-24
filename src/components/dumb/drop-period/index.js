import React, {Component} from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v';

export default class DropPeriod extends Component {
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
        let value = [];
      for (let valueItem in this.props.value) {
        value.push(
          <DropdownItem key={valueItem}>{valueItem}</DropdownItem>
        )}
        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="drop-period project-options" >
                <DropdownToggle size="sm" className="bg-transparent gray border-0">
                    <FaEllipsisV/>
                </DropdownToggle>
                <DropdownMenu>
                  {value}
                </DropdownMenu>
            </ButtonDropdown>

        );
    }
}
