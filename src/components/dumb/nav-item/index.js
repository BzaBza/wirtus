import React from 'react';
import {Link} from 'react-router-dom';

class NavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: 'active-home',
    };
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive(tab) {
    if (this.state.isActive !== tab) {
      this.setState({
        isActive: tab,
      });
    }
  }

  render() {
    return (
     <ul className="nav-list">
       {this.props.menus.map((value, id) => <li key={id}>
         <Link to={value.path.toLowerCase()}
               className={ `${(this.state.isActive === 'active-' + value.linkName.toLowerCase()) ?
                'active-' + value.linkName.toLowerCase() : value.linkName.toLowerCase() }`}
               onClick={ () => {
                 this.toggleActive('active-' + value.linkName.toLowerCase());
               }}
         />
       </li>)}
     </ul>
    );
  }
}
export default NavItem;
