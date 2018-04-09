import React from 'react';

import FaSearch from 'react-icons/lib/fa/search';
import TiBell from 'react-icons/lib/ti/bell';
import UserMenu from '../../dumb/user-menu/index';
import Logo from "../../dumb/logo/index";
import ButtonAdd from "../../dumb/main-header-add-btn";

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
         <ul className="d-flex header-side-menu align-items-center justify-content-between">
           <li>
             <ButtonAdd/>
           </li>
           <li className="d-flex">
             <button type="button" className="drop-menu text-white" onClick={this.handleSearchClick}>
               <FaSearch className="icon"/>
             </button>
             <input type="text" className={this.state.searchToggle ? 'hide' : ''}/>
           </li>
           <li>
             <button type="button" className="drop-menu text-white">
               <TiBell className="icon"/>
             </button>
           </li>
           <UserMenu/>
         </ul>
       </div>
     </header>
    );
  }
}

export default MainHeader;
