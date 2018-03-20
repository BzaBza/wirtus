import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from '../../dumb/logo/index';

class Navigation extends React.Component {
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
        const menus = [
            {linkName: 'Home', path: '/home', id: '1'},
            {linkName: 'Menu', path: '/Menu', id: '2'},
            {linkName: 'Trending', path: '/Trending', id: '3'},
            {linkName: 'Email', path: '/Email', id: '4'},
        ];
        return (

            <aside className='navigation'>
                <Logo/>
                <nav>
                    <ul className="nav-list">
                        {menus.map((value, id) => <li key={id}>
                            <Link to={value.path.toLowerCase()}
                                  className={ `${(this.state.isActive === 'active-' + value.linkName.toLowerCase()) ?
                                      'active-' + value.linkName.toLowerCase() : value.linkName.toLowerCase() }`}
                                  onClick={ () => {
                                      this.toggleActive('active-' + value.linkName.toLowerCase());
                                  }}
                            />
                        </li>)}
                    </ul>
                </nav>
            </aside>
        );
    }
}
Navigation.propTypes = {
    navToggle: PropTypes.bool,
};
Navigation.defaultProps = {
    navToggle: false,
};
export default Navigation;
