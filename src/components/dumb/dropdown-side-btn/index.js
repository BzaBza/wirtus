import React, {Component} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class DropdownSideBtn extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.currentCompany = this.currentCompany.bind(this);
    this.state = {
      dropdownOpen: false,
      company:['Microsoft', 'Google','Symu.co','JCD.pl','Facebook','Themeforest'],
      currentCompany:'All'
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  currentCompany(event){
    this.setState({
      currentCompany: event.target.innerText
    });
    if(event.target.innerText === 'All')  event.target.innerText = '';
    this.props.filterData(event.target.innerText);
  }

  render () {
    return (
     <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
       <DropdownToggle caret className="button btn btn-primary bg-transparent">
         {this.state.currentCompany}
       </DropdownToggle>
       <DropdownMenu>
         <DropdownItem onClick={this.currentCompany}>All</DropdownItem>
         {this.state.company.map((item, index) => (
          <DropdownItem key={index} onClick={this.currentCompany}>{item}</DropdownItem>
         ))}
       </DropdownMenu>
     </Dropdown>
    );
  }
}
export default DropdownSideBtn;



