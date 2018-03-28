import React, {Component} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class DropdownSideBtn extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }


  render () {
    return (
     <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
       <DropdownToggle caret className="button btn btn-primary bg-transparent">
         Dropdown
       </DropdownToggle>
       <DropdownMenu>

          <DropdownItem key>Another Action</DropdownItem>

       </DropdownMenu>
     </Dropdown>
    );
  }
}
export default DropdownSideBtn;



