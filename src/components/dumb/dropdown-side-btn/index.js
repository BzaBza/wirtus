import React, {Component} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class DropdownSideBtn extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.currentData = this.currentData.bind(this);
    this.state = {
      dropdownOpen: false,
      data: this.props.data,
      currentData: this.props.currentData
    };
  }

  componentWillMount(){
    this.setState({
      currentData: this.props.currentData,
      data: this.props.data
    })
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  currentData(event){
    this.setState({
      currentData: event.target.innerText
    });
    if(event.target.innerText === 'All')  event.target.innerText = '';
    this.props.filterData(event.target.innerText);
  }

  render () {
    return (
     <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="side-drop-btn">
       <DropdownToggle caret={true} className={`${this.props.text}
       button btn btn-primary bg-transparent justify-content-between d-flex align-items-center side-drop-btn  border-white`}>
         {this.state.currentData}
       </DropdownToggle>
       <DropdownMenu>
         {this.state.data.map((item, index) => (
          <DropdownItem key={index} onClick={this.currentData}>{item}</DropdownItem>
         ))}
       </DropdownMenu>
     </Dropdown>
    );
  }
}
export default DropdownSideBtn;



