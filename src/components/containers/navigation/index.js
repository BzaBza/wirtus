import React from 'react';
import Logo from '../../dumb/logo/index';
import NavItem from "../../dumb/nav-item/index";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [
        {linkName: 'Home', path: '/home', id: '1'},
        {linkName: 'Menu', path: '/Menu', id: '2'},
        {linkName: 'Trending', path: '/Trending', id: '3'},
        {linkName: 'Message', path: '/Message', id: '4'},
        {linkName: 'Users', path: '/Users', id: '5'},
      ]
    };
  }

  render() {
    return (

     <aside className="navigation">
       <Logo/>
       <nav>
         <NavItem menus={this.state.menus}/>
       </nav>
     </aside>
    );
  }
}

export default Navigation;
