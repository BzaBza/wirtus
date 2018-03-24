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
        let projects = [];
      for (let project in this.props.projects) {
        projects.push(
          <DropdownItem key={project}>{project}</DropdownItem>
        )}
        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="drop-period project-options" >
                <DropdownToggle size="sm" className="bg-transparent gray border-0">
                    <FaEllipsisV/>
                </DropdownToggle>
                <DropdownMenu>
                  {projects}
                </DropdownMenu>
            </ButtonDropdown>

        );
    }
}
